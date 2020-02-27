import api from 'api';

class ProfileService {
  getProfile(id) {
    return api.get(`/users/${id}`);
  }

  updateProfile(id, profile) {
    return api.put(`/users/${id}`, profile);
  }
}

export default new ProfileService();
