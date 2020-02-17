import api from 'api';

class TargetService {
  createTarget(target) {
    return api.post('/targets', target);
  }

  getTargets(user) {
    return api.get('/targets', user);
  }
}

export default new TargetService();
