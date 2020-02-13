import api from 'api';

class TargetService {
  createTarget(target) {
    return api.post('/targets', target);
  }

  targets(user) {
    return api.get('/targets', user);
  }

  topics() {
    return api.get('/topics');
  }
}

export default new TargetService();
