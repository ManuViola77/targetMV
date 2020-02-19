import api from 'api';

class TargetService {
  createTarget(target) {
    return api.post('/targets', target);
  }

  getTargets() {
    return api.get('/targets');
  }

  deleteTarget(idTarget) {
    return api.delete(`/targets/${idTarget}`);
  }
}

export default new TargetService();
