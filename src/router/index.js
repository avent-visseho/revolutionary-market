import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import AboutView from '../views/AboutView.vue'
import ProductView from '../views/ProductView.vue'
import DetailProductView from '../views/DetailProductView.vue'
import ContactView from '../views/ContactView.vue'
import CartView from '../views/CartView.vue'
import MaintenanceView from '../views/MaintenanceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView
    }
    ,
    {
      path: '/detail',
      name: 'detail',
      component: DetailProductView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/maintenance',
      name: 'maintenance',
      component: MaintenanceView
    }
  ]
})

export default router
