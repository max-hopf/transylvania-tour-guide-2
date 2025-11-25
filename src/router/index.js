import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'

const HomePage = () => import('../views/HomePage.vue')
const TourPageTransylvania = () => import('../views/TourPageTransylvania.vue')
const TourPageBucovina = () => import('../views/TourPageBucovina.vue')
const TourPageMaramures = () => import('../views/TourPageMaramures.vue')
const TourPageMaramuresBucovina = () => import('../views/TourPageMaramuresBucovina.vue')
const TourPageCyclingMaramures = () => import('../views/TourPageCyclingMaramures.vue')
const TourPageBespoke = () => import('../views/TourPageBespoke.vue')
const AboutUsPage = () => import('../views/AboutUsPage.vue')
const PrivacyPolicyPage = () => import('../views/PrivacyPolicyPage.vue')
const TermsAndConditionsPage = () => import('../views/TermsAndConditionsPage.vue')

export const routes = [
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
]

const router = createRouter({
  history: import.meta.env.SSR
    ? createMemoryHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),
  routes,
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
