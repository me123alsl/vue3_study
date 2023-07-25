import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import user from "@/store/modules/user";
import contents from "@/store/modules/contents";

const store = createStore({
    modules: {
        user, 
        contents
    },
  plugins: [createPersistedState()], 
});

export default store;