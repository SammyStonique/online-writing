import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import GuaranteesView from '../views/GuaranteesView.vue'
import PricesView from '../views/PricesView.vue'
import ServicesView from '../views/ServicesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactView
  },
  {
    path: '/guarantees',
    name: 'guarantees',
    component: GuaranteesView
  },
  {
    path: '/prices',
    name: 'prices',
    component: PricesView
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
