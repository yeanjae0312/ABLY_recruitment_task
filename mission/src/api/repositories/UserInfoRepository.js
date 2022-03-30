import Client from '../clients/AxiosClient';

const resource = '/api/user';

export default {
  get(payload) {
    return Client.get(`${resource}`, { headers: { Authorization: `Bearer ${payload}` } });
  },
};
