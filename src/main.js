import './assets/main.css'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, scrollBehavior } from './router'

export const createApp = ViteSSG(
    App,
    { routes, base: import.meta.env.BASE_URL, scrollBehavior },
    ({ app, router, routes, isClient, initialState }) => {
        if (isClient) {
            // Prevent browser from restoring scroll position
            if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual'
            }
        }

        router.beforeEach((to, from, next) => {
            if (isClient) {
                const redirect = sessionStorage.getItem('redirect')
                if (redirect) {
                    sessionStorage.removeItem('redirect')
                    if (to.path === '/') {
                        next(redirect)
                        return
                    }
                }
            }
            next()
        })
    },
)
