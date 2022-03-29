import { createStore } from 'vuex';
import LoginStorage from '@/store/modules/Login';
import AuthStorage from '@/store/modules/Auth';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  modules: {
    LoginStorage,
    AuthStorage,
  },

  plugins: [createPersistedState({
    paths: ['LoginStorage'],
  })],
});
