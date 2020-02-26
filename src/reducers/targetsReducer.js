import { createReducer } from '@rootstrap/redux-tools';
import { getTargetsSuccess } from 'actions/targetActions';

const initialState = { targetsList: [] };

const targetsReducer = {
  [getTargetsSuccess]: (store, action) => {
    store.targetsList = action.payload;
  },
};

export default createReducer(initialState, targetsReducer);
