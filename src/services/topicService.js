import api from 'api';

class TopicService {
  getTopics() {
    return api.get('/topics');
  }
}

export default new TopicService();
