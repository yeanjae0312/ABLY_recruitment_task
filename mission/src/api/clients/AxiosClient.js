import axios from 'axios';

const baseDomain = 'https://ably-frontend-assignment-server.vercel.app';
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL,
});
