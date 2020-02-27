import {
  name,
  email,
  firstName,
  lastName,
  gender,
  avatar,
  //push_token,
} from 'constants/fields';

import strings from 'locale';

const { SIGN_UP_ERROR /*, UPDATE_PROFILE_ERROR*/ } = strings;

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
