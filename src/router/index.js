import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestComponent from '../views/TestComponent.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }, {
    path: '/test',
    name: 'TestComponent',
    component: TestComponent
  }, {
    path: '/',
    name: 'LandingPage',
    component: () => import('../views/LandingPage.vue')
  }, {
    path: '/p2',
    name: 'LandingPage2',
    component: () => import('../views/LandingPage2.vue')
  }, {
    path: '/p3',
    name: 'LandingPage3',
    component: () => import('../views/LandingPage3.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
