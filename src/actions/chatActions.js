import { createThunk, createAction } from '@rootstrap/redux-tools';

import chatService from 'services/chatService';
import parseError from 'utils/parseError';

const GET_CONVERSATIONS = 'GET_CONVERSATIONS';
const GET_MESSAGES = 'GET_MESSAGES';

const CREATE_CONSUMER = 'CREATE_CONSUMER';
const DISCONNECT_ACTION_CABLE = 'DISCONNECT_ACTION_CABLE';
const SEND_MESSAGE = 'SEND_MESSAGE';
const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';

export const CLEAR_CHAT_STATE = 'CLEAR_CHAT_STATE';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const clearChatState = createAction(CLEAR_CHAT_STATE);
export const createConsumer = createAction(CREATE_CONSUMER);
export const disconnectActionCable = createAction(DISCONNECT_ACTION_CABLE);
export const receiveMessage = createAction(RECEIVE_MESSAGE);
export const sendMessage = createAction(SEND_MESSAGE);
export const subscribe = createAction(SUBSCRIBE);
export const unsubscribe = createAction(UNSUBSCRIBE);

// get all matches (1 match = 1 conversation)
export const getConversations = createThunk(GET_CONVERSATIONS, async () => {
  try {
    return (await chatService.getConversations()).data.matches;
  } catch ({ data }) {
    throw parseError(data);
  }
});

// get all messages from a conversation (1 conversation = * messages)
export const getMessages = createThunk(GET_MESSAGES, async (id, page) => {
  try {
    const {
      data: { messages },
    } = await chatService.getMessages(id, page);
    return { messages, page };
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const { success: getConversationsSuccess } = getConversations;
export const { success: getMessagesSuccess } = getMessages;
