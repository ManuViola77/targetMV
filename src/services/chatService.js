import api from 'api';

class ChatService {
  getConversations() {
    return api.get('/match_conversations');
  }

  getMessages(id, page) {
    return api.get(`/match_conversations/${id}/messages?{page=${page}}`);
  }
}

export default new ChatService();
