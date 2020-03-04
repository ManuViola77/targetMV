import { createThunk } from '@rootstrap/redux-tools';

import chatService from 'services/chatService';
import parseError from 'utils/parseError';

const GET_CONVERSATIONS = 'GET_CONVERSATIONS';
const GET_MESSAGES = 'GET_MESSAGES';

export const getConversations = createThunk(GET_CONVERSATIONS, async () => {
  try {
    return (await chatService.getConversations()).data.matches;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const getMessages = createThunk(GET_MESSAGES, async (id, page) => {
  try {
    return (await chatService.getMessages(id, page)).data.messages;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const { success: getConversationsSuccess } = getConversations;
export const { success: getMessagesSuccess } = getMessages;
