import { name, email, gender } from 'constants/fields';

import strings from 'locale';

const { SIGN_UP_ERROR } = strings;

const updateProfileValidations = {
  [gender]: {
    presence: {
      value: true,
      message: SIGN_UP_ERROR.emptyGender,
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

  [name]: {
    presence: {
      value: true,
      message: SIGN_UP_ERROR.emptyName,
    },
  },
};

export default updateProfileValidations;
