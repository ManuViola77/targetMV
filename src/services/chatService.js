import api from 'api';
import { applyQueryParams } from 'utils/helpers';

class ChatService {
  getConversations() {
    return api.get('/match_conversations');
  }

  getMessages(id, page) {
    const queryParams = {
      page,
    };
    const url = applyQueryParams(
      `/match_conversations/${id}/messages`,
      queryParams,
    );
    return api.get(url);
  }
}

export default new ChatService();
