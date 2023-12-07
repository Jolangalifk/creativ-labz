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
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/my-account',
      name: 'my account',
      component: () => import('../views/MyAccountView.vue')
    },
    {
      path: '/my-account/orders',
      name: 'Orders',
      component: () => import('../views/OrdersView.vue')
    },
    {
      path: '/my-account/downloads',
      name: 'Downloads',
      component: () => import('../views/DownloadsView.vue')
    },
    {
      path: '/my-account/edit-address',
      name: 'Addresses',
      component: () => import('../views/AddressesView.vue')
    },
    {
      path: '/my-account/edit-address/billing',
      name: 'Billing Address',
      component: () => import('../views/BillingAddressView.vue')
    },
    {
      path: '/my-account/edit-address/shipping',
      name: 'Shipping Address',
      component: () => import('../views/ShippingAddressView.vue')
    },
    {
      path: '/my-account/edit-account',
      name: 'Account Details',
      component: () => import('../views/AccountDetailsView.vue')
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
      path: '/detail-news-events/:id',
      name: 'DetailNewsEvents',
      component: () => import('../views/DetailNewsEvents.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/Cart.vue')
    }
  ]
})

export default router
