import { combineReducers } from 'redux';
import { statusReducer } from '@rootstrap/redux-tools';

import session from 'reducers/sessionReducer';

const AppReducer = combineReducers({
  session,
  actionStatus: statusReducer,
});

export default AppReducer;
