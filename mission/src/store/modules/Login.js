import router from '@/router';

const loginStore = {
  state: {
    loginEmail: '',
    loginPw: '',
    accessToken: '',
  },

  getters: {
    isLogin(state) {
      return state.accessToken !== '';
    },
  },

  mutations: {
    login(state, payload) {
      state.loginEmail = payload.email;
      state.loginPw = payload.password;
      state.accessToken = payload.accessToken;
    },
    loginCheck(state) {
      if (!state.accessToken) {
        router.push({ name: 'Login' }).catch((error) => { console.log(error); });
      }
    },
  },

  actions: {
  },
};

export default loginStore;
