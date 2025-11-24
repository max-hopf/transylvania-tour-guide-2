import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TourPageTransylvania from '../views/TourPageTransylvania.vue'
import TourPageBucovina from '../views/TourPageBucovina.vue'
import TourPageMaramures from '../views/TourPageMaramures.vue'
import TourPageMaramuresBucovina from '../views/TourPageMaramuresBucovina.vue'
import TourPageCyclingMaramures from '../views/TourPageCyclingMaramures.vue'
import TourPageBespoke from '../views/TourPageBespoke.vue'
import AboutUsPage from '../views/AboutUsPage.vue'
import PrivacyPolicyPage from '../views/PrivacyPolicyPage.vue'
import TermsAndConditionsPage from '../views/TermsAndConditionsPage.vue'

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
      component: AboutUsPage,
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
    {
      path: '/tour/maramures-bucovina',
      name: 'tour-maramures-bucovina',
      component: TourPageMaramuresBucovina,
    },
    {
      path: '/tour/cycling-maramures',
      name: 'tour-cycling-maramures',
      component: TourPageCyclingMaramures,
    },
    {
      path: '/tour/bespoke',
      name: 'tour-bespoke',
      component: TourPageBespoke,
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicyPage,
    },
    {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions',
      component: TermsAndConditionsPage,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const redirect = sessionStorage.getItem('redirect')
  if (redirect) {
    sessionStorage.removeItem('redirect')
    if (to.path === '/') {
      next(redirect)
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
