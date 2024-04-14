import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import './style.css'
import 'cropperjs/dist/cropper.css'
import App from './App.vue'
import AboutUs from './pages/AboutUs.vue'
import Convert from './pages/Convert.vue'
import Crop from './pages/Crop.vue'
import Home from './pages/Home.vue'
import Result from './pages/Result.vue'

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

createApp(App)
	.use(router)
	.mount('#app')
