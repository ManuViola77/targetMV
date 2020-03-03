import { createThunk } from '@rootstrap/redux-tools';

import chatService from 'services/chatService';
import parseError from 'utils/parseError';

const GET_CONVERSATIONS = 'GET_CONVERSATIONS';

export const getConversations = createThunk(GET_CONVERSATIONS, async () => {
  try {
    const {
      data: { matches },
    } = await chatService.getConversations();
    return matches;
  } catch ({ data }) {
    throw parseError(data);
  }
});

export const { success: getConversationsSuccess } = getConversations;
