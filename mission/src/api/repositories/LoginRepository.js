import Client from '../clients/AxiosClient';

const resource = '/api/login';

export default {
  create(payload) {
    return Client.post(`${resource}`, payload, { headers: { 'Content-Type': 'application/json' } });
  },
};
