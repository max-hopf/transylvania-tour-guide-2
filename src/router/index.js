import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import TourPageTransylvania from '../components/TourPageTransylvania.vue'
import TourPageBucovina from '../components/TourPageBucovina.vue'
import TourPageMaramures from '../components/TourPageMaramures.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/tour/transylvania',
      name: 'tour-transylvania',
      component: TourPageTransylvania,
    },
    {
      path: '/tour/bucovina',
      name: 'tour-bucovina',
      component: TourPageBucovina,
    },
    {
      path: '/tour/maramures',
      name: 'tour-maramures',
      component: TourPageMaramures,
    },
  ],
})

export default router
