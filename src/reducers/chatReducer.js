import { createReducer } from '@rootstrap/redux-tools';
import {
  CLEAR_CHAT_STATE,
  getConversationsSuccess,
  getMessagesSuccess,
  RECEIVE_MESSAGE,
} from 'actions/chatActions';

const initialState = { matches: [] };

const isInCollection = (array, id) => {
  return array.find(({ id: elementId }) => elementId === id);
};

const chatReducer = {
  [CLEAR_CHAT_STATE]: store => {
    store.messages = undefined;
  },

  [getConversationsSuccess]: (store, { payload }) => {
    store.matches = payload;
  },

  [getMessagesSuccess]: (store, { payload: { messages, page } }) => {
    if (page !== 1) {
      const newMessages = messages.filter(({ id }) => {
        return !isInCollection(store.messages, id);
      });
      store.messages = [...newMessages, ...store.messages];
    } else {
      store.messages = messages;
    }
  },

  [RECEIVE_MESSAGE]: (store, { payload }) => {
    store.messages = [...store.messages, payload];
  },
};

export default createReducer(initialState, chatReducer);
