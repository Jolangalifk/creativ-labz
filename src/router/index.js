import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-us',
      name: 'about us',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/news-event',
      name: 'News & Events',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NewsEvents.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/my-account',
      name: 'my account',
      component: () => import('../views/MyAccount.vue')
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/product/:slug',
      name: 'Product Detail',
      component: () => import('../views/ProductDetailView.vue')
    },
    {
      path: '/detail-news-events',
      name: 'Detail News & Events',
      component: () => import('../views/DetailNewsEvents.vue')
    }
  ]
})

export default router
