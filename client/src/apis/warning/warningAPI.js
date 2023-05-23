import axiosClient from 'utils/axios';

const endpoint = '/api/warnings';

export default {
  async getAllWarnings() {
    const response = await axiosClient.get(endpoint);

    return response.data;
  },

  async addWarning(data) {
    const response = await axiosClient.post(endpoint, data);
    return response.data;
  },

  async markAsReadedWarnings(data) {
    const response = await axiosClient.put(`${endpoint}/mark-read`, data);
    return response.data;
  },

  async removeWarnings(data) {
    const response = await axiosClient.delete(endpoint, { data });
    return response.data;
  },
};
