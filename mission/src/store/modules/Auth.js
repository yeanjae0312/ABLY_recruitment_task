const authStore = {
  namespaced: true,

  state: {
    issueToken: '',
    countTime: '',
  },

  getters: {
  },

  mutations: {
    storedAuthData(state, payload) {
      state.issueToken = payload.issueToken;
      state.countTime = payload.remainMillisecond;
    },
  },

  actions: {
  },
};

export default authStore;
