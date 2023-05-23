import { createRouter, createWebHistory } from 'vue-router'
import VirtualAccountPaymentHistory from '../views/VirtualAccountPaymentHistory.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', redirect: '/home/VirtualAccountPaymentHistory' 
    },
    {
      path: '/home/VirtualAccountPaymentHistory',
      name: 'VirtualAccountPaymentHistory',
      component: VirtualAccountPaymentHistory
    },
    {
      path: '/home/VirtualAccountPaymentHistory/:id',
      name: 'detailsPopup',
      component: () => import('../views/DetailsPopup.vue'),
      props: true
    }
  ]
})

export default router
