import axiosClient from 'utils/axios';

const endpoint = '/api/users';

export default {
  async getUserInfo(id) {
    const path = `${endpoint}/${id}`;

    const response = await axiosClient.get(path);

    return response.data;
  },

  async getAllUsers() {
    const path = `${endpoint}/`;

    const response = await axiosClient.get(path);

    return response.data;
  },

  async getCountProfile() {
    const path = `${endpoint}/count`;

    const response = await axiosClient.get(path);

    return response.data;
  },
};
