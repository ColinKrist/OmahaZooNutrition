import axios from 'axios';
import LocalStorage from '../static/LocalStorage';

const API_BASE_URL = process.env.BACKEND_URL;

class Api {
  constructor(token) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  setToken(newToken) {
    this.token = newToken;
  }

  validateToken = async () => {
    try {
      if (this.token === '' || this.token === 'undefined') {
        throw new Error('Session Token Blank');
      }
      return await axios.post(`${API_BASE_URL}/api/AccessTokens/validate`, {
        token: this.token,
      });
    } catch (err) {
      document.cookie = 'authToken=; path=/';
      this.token = '';
      throw err;
    }
  };

  login = async (email, password) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/api/accounts/login`, {
        email,
        password,
      });
      const { data } = res;
      if (data) {
        LocalStorage.setEmail(data.email);
        LocalStorage.setFirstName(data.firstName);
        LocalStorage.setLastName(data.lastName);
        LocalStorage.setRole(data.role);
        LocalStorage.setId(data.id);
        document.cookie = `authToken=${res.data.token}; path=/`;
        this.setToken(res.data.token);
      } else {
        throw new Error('Invalid login return');
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  logout = async () => {
    LocalStorage.setEmail('');
    LocalStorage.setFirstName('');
    LocalStorage.setLastName('');
    LocalStorage.setRole('');
    LocalStorage.setId(0);
    if (this.token) {
      try {
        await axios.post(`${API_BASE_URL}/api/accounts/logout`, null, {
          params: {
            access_token: this.token,
          },
        });
      } catch (err) {
        // Ignore the error
      }
    }
    this.token = '';
    document.cookie = 'authToken=; path=/';
  };
}

export default Api;
