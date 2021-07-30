import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Session from '../views/Session.vue'
import Prestamos from '../views/Prestamos.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/session',
    name: 'Session',
    component: Session
  },
  {
    path: '/prestamos',
    name: 'Prestamos',
    component: Prestamos
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
