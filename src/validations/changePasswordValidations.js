import { currentPassword, password, confirmPassword } from 'constants/fields';
import strings from 'locale';

const { CHANGE_PASSWORD_ERROR } = strings;

const changePasswordValidations = {
  [currentPassword]: {
    presence: {
      value: true,
      message: CHANGE_PASSWORD_ERROR.emptyCurrentPassword,
    },
  },

  [password]: {
    presence: {
      value: true,
      message: CHANGE_PASSWORD_ERROR.emptyPassword,
    },
    length: {
      minimum: 6,
      message: CHANGE_PASSWORD_ERROR.passwordSixChar,
    },
  },

  [confirmPassword]: {
    presence: {
      value: true,
      message: CHANGE_PASSWORD_ERROR.emptyConfirmPassword,
    },
    equality: {
      attribute: password,
      message: CHANGE_PASSWORD_ERROR.confirmPasswordMatch,
    },
  },
};

export default changePasswordValidations;
