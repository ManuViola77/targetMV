import api from 'api';

class UserService {
  facebookLogin(fbToken) {
    return api.post('/users/facebook', fbToken);
  }

  login(user) {
    return api.post('/users/sign_in', user);
  }

  logout() {
    return api.delete('/users/sign_out');
  }

  signUp(user) {
    return api.post('/users', user);
  }
}

export default new UserService();
