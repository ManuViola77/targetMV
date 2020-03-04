import { createReducer } from '@rootstrap/redux-tools';
import {
  getConversationsSuccess,
  getMessagesSuccess,
} from 'actions/chatActions';

const initialState = { matches: [] };

const chatReducer = {
  [getConversationsSuccess]: (store, { payload }) => {
    store.matches = payload;
  },

  [getMessagesSuccess]: (store, { payload }) => {
    store.messages = payload;
  },
};

export default createReducer(initialState, chatReducer);
