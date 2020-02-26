import humps from 'humps';
import strings from 'locale';

export default async response => {
  if (!response) throw new Error({ message: strings.API.errorMessage });

  try {
    const json = await response.json();

    response.data = humps.camelizeKeys(
      json || { message: response.statusText },
    );
    return response;
  } catch (error) {
    response.data = { message: strings.API.errorNotJSON };
    return response;
  }
};
