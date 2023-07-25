import { createRouter, createWebHistory } from 'vue-router'

// Route Components
import Home from '@/views/HomeView.vue'
import ComponentInstalled from '@/views/ComponentView.vue'

const routes = [
    { path: '/', component:Home},
    { path: '/component', rediect: '/component/installed'},
    { path: '/component/installed', component:ComponentInstalled},
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;