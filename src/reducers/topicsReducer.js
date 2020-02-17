import { createReducer } from '@rootstrap/redux-tools';
import { getTopics } from 'actions/topicActions';

const initialState = { topicsList: [] };

const topicsReducer = {
  [getTopics.success]: (store, action) => {
    store.topicsList = action.payload;
  },
};

export default createReducer(initialState, topicsReducer);
