import Config from 'react-native-config';
import ApiService from './apiService';
import { APPLICATION_JSON, CONTENT_TYPE } from 'constants/api';

export default new ApiService({
  baseUrl: Config.API_URL,
  headers: { accept: APPLICATION_JSON, [CONTENT_TYPE]: APPLICATION_JSON },
});
