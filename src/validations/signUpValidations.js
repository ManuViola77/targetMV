import strings from 'locale';
import {
  name,
  email,
  password,
  confirmPassword,
  gender,
} from 'constants/fields';

const { SIGN_UP_ERROR } = strings;

const signUpValidations = {};

signUpValidations[name] = {
  presence: {
    value: true,
    message: SIGN_UP_ERROR.emptyName,
  },
};

signUpValidations[email] = {
  presence: {
    value: true,
    message: SIGN_UP_ERROR.emptyEmail,
  },
  email: {
    value: true,
    message: SIGN_UP_ERROR.emailNotValid,
  },
};

signUpValidations[password] = {
  presence: {
    value: true,
    message: SIGN_UP_ERROR.emptyPassword,
  },
  length: {
    minimum: 6,
    message: SIGN_UP_ERROR.passwordSixChar,
  },
};

signUpValidations[confirmPassword] = {
  presence: {
    value: true,
    message: SIGN_UP_ERROR.emptyConfirmPassword,
  },
  equality: {
    attribute: password,
    message: SIGN_UP_ERROR.confirmPasswordMatch,
  },
};

signUpValidations[gender] = {
  presence: {
    value: true,
    message: SIGN_UP_ERROR.emptyGender,
  },
};

export default signUpValidations;
