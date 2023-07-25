import createPersistedState from "vuex-persistedstate";
import Vuex from "vuex";

import user from "@/store/modules/user";
import contents from "@/store/modules/contents";

const store = new Vuex.Store({
    modules: {
        user, 
        contents
    },
  plugins: [createPersistedState()], 
});

export default store;