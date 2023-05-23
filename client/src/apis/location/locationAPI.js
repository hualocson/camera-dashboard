import axiosClient from 'utils/axios';

const endpoint = '/api/locations';

export default {
  async getAllLocations() {
    const response = await axiosClient.get(endpoint);

    return response.data;
  },
};
