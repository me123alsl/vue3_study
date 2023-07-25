import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import { BootstrapVue3} from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

const app = createApp(App);

/* vue plugin */
app.use(router);
app.use(store);

/* Bootstrap */
app.use(BootstrapVue3);
app.use(VueSidebarMenu);

app.mount('#app')
