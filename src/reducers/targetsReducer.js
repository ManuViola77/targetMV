import { createReducer } from '@rootstrap/redux-tools';
import { getTargets } from 'actions/targetActions';

const initialState = { targetsList: [] };

const targetsReducer = {
  [getTargets.success]: (store, action) => {
    store.targetsList = action.payload;
  },
};

export default createReducer(initialState, targetsReducer);
