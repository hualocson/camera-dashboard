import axiosClient from 'utils/axios';

const endpoint = '/api/statistics';

export default {
  async getAllStatistics() {
    const response = await axiosClient.get(endpoint);

    return response.data;
  },

  async markAsReadedStatistics(data) {
    const response = await axiosClient.put(`${endpoint}/mark-read`, data);
    return response.data;
  },

  async removeStatistics(data) {
    const response = await axiosClient.delete(endpoint, { data });
    return response.data;
  },
};
