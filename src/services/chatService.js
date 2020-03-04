import api from 'api';

class ChatService {
  getConversations() {
    return api.get('/match_conversations');
  }
}

export default new ChatService();
