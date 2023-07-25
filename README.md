# testapp

- [testapp](#testapp)
  - [Project setup](#project-setup)
    - [Compiles and hot-reloads for development](#compiles-and-hot-reloads-for-development)
    - [Compiles and minifies for production](#compiles-and-minifies-for-production)
    - [Lints and fixes files](#lints-and-fixes-files)
    - [Customize configuration](#customize-configuration)
  - [프로젝트 플러그인](#프로젝트-플러그인)
    - [Bootstrap-Vue-3](#bootstrap-vue-3)
      - [Bootstrap 적용](#bootstrap-적용)
    - [vue-router](#vue-router)
      - [router 적용](#router-적용)
    - [vuex](#vuex)

## Project setup

``` bash
npm install
```

### Compiles and hot-reloads for development

``` bash
npm run serve
```

### Compiles and minifies for production

``` bash
npm run build
```

### Lints and fixes files

``` bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

---

## 프로젝트 플러그인

### Bootstrap-Vue-3

``` bash
npm install vue bootstrap bootstrap-vue-3 
```

#### Bootstrap 적용

``` javascript
import { BootstrapVue3, IconsPlugin } from 'bootstrap-vue-3'

// CSS Import 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App);
// BootstrapVue3 추가
app.use(BootstrapVue3);
app.use(IconsPlugin);

app.mount('#app');
```

### vue-router

``` bash
npm install vue-router@next
```

#### router 적용

``` javascript
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})

export default router
```

``` javascript
// main.js 추가
app.use(router);
```

### vuex

``` bash
npm install vuex@next
```

``` javascript
// vuex store 생성
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
```

``` javascript
// main.js 추가
import store from "@/store";
app.use(store);
```
