import { createRouter, createWebHistory } from 'vue-router'
import TestComponent from '../views/TestComponent.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    redirect: 'p1',
    component: () => import('../views/HomePage.vue'),
    children: [
      {
        path: 'p1',
        name: 'LandingPage',
        component: () => import('../views/LandingPage.vue')
      }, {
        path: 'p2',
        name: 'LandingPage2',
        component: () => import('../views/LandingPage2.vue')
      }, {
        path: 'p3',
        name: 'LandingPage3',
        component: () => import('../views/LandingPage3.vue')
      }
    ]
  }, {
    path: '/test',
    name: 'TestComponent',
    component: TestComponent
  }, {
    path: '/calcpage',
    name: 'CalculatorPage',
    component: () => import('../views/CalculatorPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
