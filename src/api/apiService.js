import humps from 'humps';

import InterceptorManager from 'api/utils/InterceptorManager';
import processResponse from 'api/utils/processResponse';
import { HTTP_VERB } from 'constants/api';
import strings from 'locale';

class ApiService {
  baseUrl = '';

  headers = {};

  requestInterceptors = new InterceptorManager();

  responseInterceptors = new InterceptorManager();

  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  get(uri) {
    const requestData = this.buildRequestData(HTTP_VERB.GET);
    return this.performRequest(uri, requestData);
  }

  post(uri, data) {
    const requestData = this.buildRequestData(HTTP_VERB.POST, data);
    return this.performRequest(uri, requestData);
  }

  delete(uri, data) {
    const requestData = this.buildRequestData(HTTP_VERB.DELETE, data);
    return this.performRequest(uri, requestData);
  }

  put(uri, data) {
    const requestData = this.buildRequestData(HTTP_VERB.PUT, data);
    return this.performRequest(uri, requestData);
  }

  patch(uri, data) {
    const requestData = this.buildRequestData(HTTP_VERB.PATCH, data);
    return this.performRequest(uri, requestData);
  }

  buildRequestData(httpVerb, data) {
    return {
      method: httpVerb,
      headers: this.headers,
      ...(data && { body: JSON.stringify(humps.decamelizeKeys(data)) }),
    };
  }

  async performRequest(uri, requestData = {}) {
    const url = `${this.baseUrl}${uri}`;

    try {
      const request = await this.requestInterceptors.applyFulfillHandlers(
        requestData,
      );
      const response = await fetch(url, request);
      if (!response) {
        throw new Error({ message: strings.API.errorMessage });
      }

      return this.handleResponse(response);
    } catch (error) {
      return this.handleRequestError(error);
    }
  }

  async handleResponse(response) {
    const processedResponse = await processResponse(response);
    if (processedResponse.ok) {
      return this.responseInterceptors.applyFulfillHandlers(processedResponse);
    }
    const processedErrorResponse = await this.responseInterceptors.applyFailureHandlers(
      processedResponse,
    );

    throw processedErrorResponse;
  }

  async handleRequestError(error) {
    const casedError = humps.camelizeKeys(error);
    const processedErrorResponse = await this.requestInterceptors.applyFailureHandlers(
      casedError,
    );
    return processedErrorResponse;
  }
}

export default ApiService;
