import axiosClient from 'utils/axios';

const endpoint = '/api/cameras';

export default {
  async getAllCameras() {
    const response = await axiosClient.get(endpoint);

    return response.data;
  },
};
