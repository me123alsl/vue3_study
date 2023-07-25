const state = {
    header: 'header',
};

const mutations = {
    setHeader (state, payload) {
        state.header = payload.header;
    }
};

const getters = {
    header: state => state.header,
};

export default {
    state,
    mutations,
    getters
};
