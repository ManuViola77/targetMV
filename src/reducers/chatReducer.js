import { createReducer } from '@rootstrap/redux-tools';
import {
  getConversationsSuccess,
  getMessagesSuccess,
  RECEIVE_MESSAGE,
} from 'actions/chatActions';

const initialState = { matches: [] };

const chatReducer = {
  [getConversationsSuccess]: (store, { payload }) => {
    store.matches = payload;
  },

  [getMessagesSuccess]: (store, { payload }) => {
    store.messages = payload;
  },

  [RECEIVE_MESSAGE]: (store, { payload }) => {
    store.newMessage = payload;
  },
};

export default createReducer(initialState, chatReducer);
