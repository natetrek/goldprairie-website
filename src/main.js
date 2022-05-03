// import { createApp } from 'vue';
// import { createWebHistory, createRouter } from 'vue-router';

import App from './App.vue';
import { ViteSSG } from 'vite-ssg'
import BaseHome from './pages/BaseHome.vue';
import TestPage from './pages/TestPage.vue';
import NotFound from './pages/NotFound.vue';

import './css/main.css'

const routes = [
  { path: '/', component: BaseHome },
  { path: '/test', component: TestPage },
  { path: "/:catchAll(.*)", component: NotFound },
];

/*
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)

app.use(router)
app.mount('#app')
*/

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
)

