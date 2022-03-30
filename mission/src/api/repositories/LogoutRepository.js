import Client from '../clients/AxiosClient';

const resource = '/api/logout';

export default {
  create(payload) {
    return Client.post(`${resource}`, payload, { headers: { Authorization: `Bearer ${payload}` } });
  },
};
