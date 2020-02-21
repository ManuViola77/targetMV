import { combineReducers } from 'redux';
import { statusReducer } from '@rootstrap/redux-tools';

import session from 'reducers/sessionReducer';
import targets from 'reducers/targetsReducer';
import topics from 'reducers/topicsReducer';

const AppReducer = combineReducers({
  session,
  actionStatus: statusReducer,
  topics,
  targets,
});

export default AppReducer;
