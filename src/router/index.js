import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue')
    },
    {
      path: '/about-us',
      name: 'about us',
      component: () => import('../views/about/index.vue')
    },
    {
      path: '/news-event',
      name: 'News & Events',
      component: () => import('../views/news-event/index.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact/index.vue')
    },
    {
      path: '/my-account',
      name: 'my account',
      component: () => import('../views/my-account/index.vue')
    },
    {
      path: '/my-account/orders',
      name: 'Orders',
      component: () => import('../views/my-account/orders.vue')
    },
    {
      path: '/my-account/downloads',
      name: 'Downloads',
      component: () => import('../views/my-account/downloads.vue')
    },
    {
      path: '/my-account/edit-address',
      name: 'Addresses',
      component: () => import('../views/addresses/index.vue')
    },
    {
      path: '/my-account/edit-address/billing',
      name: 'Billing Address',
      component: () => import('../views/addresses/billing.vue')
    },
    {
      path: '/my-account/edit-address/shipping',
      name: 'Shipping Address',
      component: () => import('../views/addresses/shipping.vue')
    },
    {
      path: '/my-account/edit-account',
      name: 'Account Details',
      component: () => import('../views/my-account/details.vue')
    },
    {
      path: '/shop',
      name: 'Shop',
      component: () => import('../views/product/index.vue')
    },
    {
      path: '/product/:slug',
      name: 'Product Detail',
      component: () => import('../views/product/_slug/index.vue')
    },
    {
      path: '/:slug',
      name: 'DetailNewsEvents',
      component: () => import('../views/news-event/_slug/index.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/cart/index.vue')
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('../views/checkout/index.vue')
    }
  ]
})

export default router
