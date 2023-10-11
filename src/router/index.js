import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import AboutView from '../views/AboutView.vue'
import ProductView from '../views/ProductView.vue'
import DetailProductView from '../views/DetailProductView.vue'

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
    }
  ]
})

export default router
