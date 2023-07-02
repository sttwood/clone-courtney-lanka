import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HowtostartView from '@/views/HowtostartView.vue'
import ServicesView from '@/views/ServicesView.vue'
import TechnologiesView from '@/views/TechnologiesView.vue'
import CareersView from '@/views/CareersView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/how-to-start',
      name: 'how-to-start',
      component: HowtostartView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/technologies',
      name: 'technologies',
      component: TechnologiesView
    },
    {
      path: '/careers',
      name: 'careers',
      component: CareersView
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: ContactView
    },
  ]
})

export default router
