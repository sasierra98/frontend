import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'
import Home from './components/Home.vue'
import Pets from './components/Pets.vue'

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
  },
  {
    path: '/user/home',
    name: 'home',
    component: Home
  },
  {
    path: '/pets/view',
    name: 'pets',
    component: Pets
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
