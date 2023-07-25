const state = {
    user: null,
    token: null,
    isUserLoggedIn: false,
  };

const mutations = {
    setUser (state, payload) {
        state.user = payload.user;
        state.token = payload.token;
        state.isUserLoggedIn = true;
    }
};

const getters = {
    user: state => state.user,
    token: state => state.token,
    isUserLoggedIn: state => state.isUserLoggedIn,
};

export default {
    state,
    mutations,
    getters
};