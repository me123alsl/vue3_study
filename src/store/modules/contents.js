import { TITLE } from '../mutation-type';
const state = {
    title: 'default title',
};

const mutations = {
    [TITLE.SET_TITLE](state, payload) {
        state.title = payload;
    }
};

const getters = {
    title(state) {
        return state.title;
    }
};

const actions = {
    setTitle({ commit }, payload) {
        commit(TITLE.SET_TITLE, payload);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
};
