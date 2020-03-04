import { createThunk, createAction } from '@rootstrap/redux-tools';

import userService from 'services/userService';
import parseError from 'utils/parseError';

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SIGNUP = 'SIGNUP';
const UPDATE_SESSION = 'UPDATE_SESSION';

export const login = createThunk(LOGIN, async user => {
  try {
    return (await userService.login({ user })).data.data.id;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const logout = createThunk(LOGOUT, async () => {
  try {
    await userService.logout();
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const signUp = createThunk(SIGNUP, async user => {
  try {
    return (await userService.signUp({ user })).data.user;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const updateSession = createAction(UPDATE_SESSION);

export const { success: loginSuccess, reset: loginReset } = login;
export const { success: signUpSuccess, reset: signUpReset } = signUp;
export const { success: logoutSuccess } = logout;
