import { createWebHistory, createRouter } from 'vue-router';
import Convert from '../pages/Convert.vue';
import Crop from '../pages/Crop.vue';
import Home from '../pages/Home.vue';
import Result from '../pages/Result.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/convert', component: Convert },
  { path: '/crop', component: Crop },
  { path: '/result', component: Result },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
