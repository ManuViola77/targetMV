import strings from 'locale';
import {
  name,
  email,
  password,
  confirmPassword,
  gender,
  errorMsg,
} from '../constants/fields';

const parseError = errors => {
  if (errors) {
    const fields = [name, email, password, confirmPassword, gender];
    const errorMessages = {};

    // return messages for each field
    for (const key in errors) {
      if (fields.includes(key)) {
        const field = key.charAt(0).toUpperCase() + key.slice(1);
        errorMessages[key] = errors[key].map(value => `${field} ${value}`);
      }
    }

    if (Object.keys(errorMessages).length === 0) {
      if (Array.isArray(errors)) {
        errorMessages[errorMsg] = errors[0];
      } else {
        const errorKey = Object.keys(errors)[0];
        errorMessages[errorMsg] = errors[errorKey][0];
      }
    }

    return errorMessages;
  }
  return strings.COMMON.somethingWentWrong;
};

export default data => {
  if (!data) return strings.COMMON.somethingWentWrong;

  const { error, errors } = data;

  if (error) return error;

  return parseError(errors);
};
