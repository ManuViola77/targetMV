import { createReducer } from '@rootstrap/redux-tools';

import {
  facebookLoginSuccess,
  loginSuccess,
  logoutSuccess,
  signUpSuccess,
  updateSession,
} from 'actions/userActions';

const initialState = {
  fbToken: null,
  info: null,
  userId: null,
};

const handleFacebookLoginSuccess = (state, { payload }) => {
  state.fbToken = payload;
};

const handleLoginSuccess = (state, { payload }) => {
  state.userId = payload;
};

const handleLogoutSuccess = () => initialState;

const handleUpdateSession = (state, { payload }) => {
  state.info = payload;
};

export default createReducer(initialState, {
  [facebookLoginSuccess]: handleFacebookLoginSuccess,
  [loginSuccess]: handleLoginSuccess,
  [logoutSuccess]: handleLogoutSuccess,
  [signUpSuccess]: handleLoginSuccess,
  [updateSession]: handleUpdateSession,
});
