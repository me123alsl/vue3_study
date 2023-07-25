import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import { BootstrapVue3} from 'bootstrap-vue-3';
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


const app = createApp(App);

app.use(router);
app.use(BootstrapVue3);
app.use(VueSidebarMenu);
app.mount('#app')
