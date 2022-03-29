const authStore = {
  namespaced: true,

  state: {
    authEmail: '',
    issueToken: '',
    countTime: '',
    confirmToken: '',
  },

  getters: {
  },

  mutations: {
    storedAuthData(state, payload) {
      state.issueToken = payload.issueToken;
      state.countTime = payload.remainMillisecond;
      console.log('보내기데이터');
    },
    storedEmail(state, payload) {
      state.authEmail = payload;
    },
    storedConfirmToken(state, payload) {
      state.confirmToken = payload.confirmToken;
      console.log(`컨펌토큰${state.confirmToken}`);
    },
  },

  actions: {
  },
};

export default authStore;
