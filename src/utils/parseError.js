import strings from 'locale';
import {
  name,
  email,
  password,
  confirmPassword,
  gender,
} from '../constants/fields';

const parseError = errors => {
  const fields = [name, email, password, confirmPassword, gender];
  const errorMessages = {};

  for (const key in errors) {
    if (fields.includes(key)) {
      const field = key.charAt(0).toUpperCase() + key.slice(1);
      errorMessages[key] = errors[key].map(value => `${field} ${value}`);
    }
  }

  return errorMessages;
};

export default data => {
  if (!data) return strings.COMMON.somethingWentWrong;

  const { error, errors } = data;

  if (error) return error;

  return parseError(errors);
};
