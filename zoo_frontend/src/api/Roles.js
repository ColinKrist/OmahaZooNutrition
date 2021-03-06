import axios from 'axios';

const API_BASE_URL = process.env.BACKEND_URL;

class Roles {
  constructor(token) {
    this.token = token;
  }

  async getRoles(filter) {
    let query = `${API_BASE_URL}/api/Roles`;
    if (filter) {
      query += `?filter=${JSON.stringify(filter)}&access_token=${this.token}`;
    } else {
      query += `?access_token=${this.token}`;
    }
    const res = await axios.get(query);
    return res;
  }
}

export default Roles;
