import Client from '../clients/AxiosClient';

const resource = '/api/reset-password';

export default {
  get(payload) {
    return Client.get(`${resource}?email=${payload}`);
  },
  create(payload) {
    return Client.post(`${resource}`, payload, { headers: { 'Content-Type': 'application/json' } });
  },
  patch(payload) {
    return Client.patch(`${resource}`, payload, { headers: { 'Content-Type': 'application/json' } });
  },
};
