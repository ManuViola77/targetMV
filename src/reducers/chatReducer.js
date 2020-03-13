import { createReducer } from '@rootstrap/redux-tools';
import {
  CLEAR_CHAT_STATE,
  getConversationsSuccess,
  getMessagesSuccess,
  RECEIVE_MESSAGE,
} from 'actions/chatActions';

const initialState = { matches: [] };

const chatReducer = {
  [CLEAR_CHAT_STATE]: store => {
    store.messages = undefined;
  },

  [getConversationsSuccess]: (store, { payload }) => {
    store.matches = payload;
  },

  [getMessagesSuccess]: (store, { payload }) => {
    store.messages = payload;
  },

  [RECEIVE_MESSAGE]: (store, { payload }) => {
    store.messages = [...store.messages, payload];
  },
};

export default createReducer(initialState, chatReducer);
