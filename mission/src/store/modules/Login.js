import router from '@/router';

const loginStore = {
  namespaced: true,

  state: {
    accessToken: '',
  },

  getters: {
    isLogin(state) {
      return state.accessToken !== '';
    },
  },

  mutations: {
    login(state, payload) {
      state.accessToken = payload.accessToken;
    },
    loginCheck(state) {
      if (!state.accessToken) {
        router.push({ name: 'Login' }).catch((error) => { console.log(error); });
      }
    },
    logout(state) {
      state.accessToken = '';
      router.push({ name: 'Login' }).catch((error) => { console.log(error); });
    },
  },

  actions: {
  },
};

export default loginStore;
