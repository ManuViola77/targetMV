import humps from 'humps';
import { API } from 'locale';

export default async response => {
  if (!response) throw new Error({ message: API.errorMessage });

  try {
    const json = await response.json();

    response.data = humps.camelizeKeys(
      json || { message: response.statusText },
    );
    return response;
  } catch (error) {
    response.data = { message: API.errorNotJSON };
    return response;
  }
};
