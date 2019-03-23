import axios from 'axios';

const API_BASE_URL = process.env.BACKEND_URL;

class Departments {
  constructor(token) {
    this.token = token;
  }

  async getDepartments(filter) {
    let query = `${API_BASE_URL}/api/Locations`;
    if (filter) {
      query += `?filter=${JSON.stringify(filter)}&access_token=${this.token}`;
    } else {
      query += `?access_token=${this.token}`;
    }
    const res = await axios.get(query);
    return res;
  }
}

export default Departments;
