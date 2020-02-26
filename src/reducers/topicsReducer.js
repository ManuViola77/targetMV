import { createReducer } from '@rootstrap/redux-tools';
import { getTopicsSuccess } from 'actions/topicActions';

const initialState = { topicsList: [] };

const topicsReducer = {
  [getTopicsSuccess]: (store, action) => {
    store.topicsList = action.payload;
  },
};

export default createReducer(initialState, topicsReducer);
