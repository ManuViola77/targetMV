import { createReducer } from '@rootstrap/redux-tools';
import { getProfileSuccess } from 'actions/profileActions';

const initialState = { user: {} };

const profileReducer = {
  [getProfileSuccess]: (store, action) => {
    store.user = action.payload;
  },
};

export default createReducer(initialState, profileReducer);
