import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: '/user/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/user/login',
    name: 'login',
    component: LogIn
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
