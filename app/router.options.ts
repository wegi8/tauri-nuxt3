import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: 'homepage',
      path: '/homepage',
      component: () => import('~/pages/home/index.vue')
    },
    {
      name: 'home333',
      path: '/homepage333',
      component: () => import('~/pages/home/index.vue')
    }
  ],
}