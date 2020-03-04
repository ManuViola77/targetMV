import { combineReducers } from 'redux';
import { statusReducer } from '@rootstrap/redux-tools';

import chat from 'reducers/chatReducer';
import profile from 'reducers/profileReducer';
import session from 'reducers/sessionReducer';
import targets from 'reducers/targetsReducer';
import topics from 'reducers/topicsReducer';

const AppReducer = combineReducers({
  session,
  actionStatus: statusReducer,
  topics,
  targets,
  profile,
  chat,
});

export default AppReducer;
