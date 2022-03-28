import { createStore } from 'vuex';
import LoginStorage from '@/store/modules/Login';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  modules: {
    LoginStorage,
  },

  plugins: [createPersistedState({
    paths: ['LoginStorage'],
  })],
});
