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
    },
    storedEmail(state, payload) {
      state.authEmail = payload;
    },
    storedConfirmToken(state, payload) {
      state.confirmToken = payload.confirmToken;
    },
  },

  actions: {
  },
};

export default authStore;
