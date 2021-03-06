import {
  name,
  email,
  password,
  confirmPassword,
  gender,
} from 'constants/fields';
import strings from 'locale';

const { SIGN_UP_ERROR } = strings;

const signUpValidations = {
  [name]: {
    presence: {
      value: true,
      message: SIGN_UP_ERROR.emptyName,
    },
  },

  [email]: {
    presence: {
      value: true,
      message: SIGN_UP_ERROR.emptyEmail,
    },
    email: {
      value: true,
      message: SIGN_UP_ERROR.emailNotValid,
    },
  },

  [password]: {
    presence: {
      value: true,
      message: SIGN_UP_ERROR.emptyPassword,
    },
    length: {
      minimum: 6,
      message: SIGN_UP_ERROR.passwordSixChar,
    },
  },

  [confirmPassword]: {
    presence: {
      value: true,
      message: SIGN_UP_ERROR.emptyConfirmPassword,
    },
    equality: {
      attribute: password,
      message: SIGN_UP_ERROR.confirmPasswordMatch,
    },
  },

  [gender]: {
    presence: {
      value: true,
      message: SIGN_UP_ERROR.emptyGender,
    },
  },
};

export default signUpValidations;
