import axiosClient from 'utils/axios';

const endPoint = '/api/auth';

export default {
  async login(payload) {
    const path = `${endPoint}/login`;

    const response = await axiosClient.post(path, payload);

    return response.data;
  },

  async register(payload) {
    const path = `${endPoint}/register`;

    const response = await axiosClient.post(path, payload);

    return response.data;
  },
};
