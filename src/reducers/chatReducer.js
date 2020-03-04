import { createReducer } from '@rootstrap/redux-tools';
import { getConversationsSuccess } from 'actions/chatActions';

const initialState = { matches: [] };

const chatReducer = {
  [getConversationsSuccess]: (store, { payload }) => {
    store.matches = payload;
  },
};

export default createReducer(initialState, chatReducer);
