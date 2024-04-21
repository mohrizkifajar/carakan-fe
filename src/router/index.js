import { createWebHistory, createRouter } from 'vue-router'
import AboutUs from '../pages/AboutUs.vue'
import Convert from '../pages/Convert.vue'
import Crop from '../pages/Crop.vue'
import Home from '../pages/Home.vue'
import Result from '../pages/Result.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about-us', component: AboutUs },
  { path: '/convert', component: Convert },
  { path: '/crop', component: Crop },
  { path: '/result', component: Result },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
