import { email, password } from 'constants/fields';
import strings from 'locale';

const { SIGN_UP_ERROR } = strings;

const signUpValidations = {
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
};

export default signUpValidations;
