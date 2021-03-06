import axios from 'axios';

const API_BASE_URL = process.env.BACKEND_URL;

class Animals {
  constructor(token) {
    this.token = token;
  }

  /**
   * grab all nutritional records where filter is met
   * @param {JSON} filter json object in format: https://loopback.io/doc/en/lb3/Querying-data.html#using-stringified-json-in-rest-queries
   * @returns {JSON} raw data coming back from request, must use .data to get actual data
   */
  async getAnimals(filter) {
    let query = `${API_BASE_URL}/api/Animals/`;
    if (filter) {
      query += `?filter=${JSON.stringify(filter)}&access_token=${this.token}`;
    } else {
      query += `?access_token=${this.token}`;
    }
    const res = await axios.get(query);
    return res;
  }

  /**
   * grab the only related Diet if it exists
   * @param {String} id Animals record id where we want to find all related Diet
   * @returns {JSON} raw data coming back from request, must use .data to get data back
   */
  async getDiet(id) {
    let query = `${API_BASE_URL}/api/Animals/`;
    if (id && parseInt(id, 10)) {
      query += `${id}/animalDiets?access_token=${this.token}`;
    }
    const res = await axios.get(query);
    return res;
  }


  /**
   * Update certain values on a Animals record. Must send in an id
   * @param {string|number} id required
   * @param {JSON} updates required
   */
  async updateAnimals(id, updates) {
    if (!id) {
      return Promise.reject(new Error('must have id send into patchAnimals()'));
    }
    if (Object.keys(updates) === undefined || Object.keys(updates).length < 1) {
      return Promise.reject(new Error('must have object with some keys that will be updated. If meant to delete use deleteAnimals()'));
    }

    const uri = `${API_BASE_URL}/api/Animals/${id}?access_token=${this.token}`;

    const res = await axios.patch(uri, updates).catch((err) => Promise.reject(err));
    return res;
  }

  /**
   * delete a certain Diet record. must send in an id
   * @param {string|number} id required
   */
  async deleteAnimals(id) {
    if (!id) {
      return Promise.reject(new Error('must have id to be able to delete'));
    }
    const uri = `${API_BASE_URL}/api/Animals/${id}?access_token=${this.token}`;
    const res = await axios.delete(uri).catch((err) => Promise.reject(err));
    return res;
  }

  /**
   * create a new record!
   * @param {JSON} params nonBlank record
   * @param {boolean} createBlank if want a blank record, if params are sent this will be ignored
   */
  async createAnimals(params, createBlank) {
    if (!params && !createBlank) {
      return Promise.reject(new Error('createBlank was false and no params were sent in, invalid config'));
    }
    const uri = `${API_BASE_URL}/api/Animals/?access_token=${this.token}`;
    if (createBlank && !params) {
      const res = await axios.post(uri).catch((err) => Promise.reject(err));
      return res;
    }
    // if params and createBlank, ignore and send in params
    const res = await axios.post(uri, params).catch((err) => Promise.reject(err));
    return res;
  }
}

export default Animals;
