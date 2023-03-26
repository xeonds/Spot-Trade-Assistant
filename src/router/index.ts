import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/system'
    },
    {
      path: '/system',
      component: () => import('../views/table-system.vue')
    },
    {
      path: '/infomation',
      component: () => import('../views/table-infomation.vue')
    },
    {
      path: '/model',
      component: () => import('../views/table-model.vue')
    },
    {
      path: '/trade',
      component: () => import('../views/table-trade.vue')
    },
    {
      path: '/goods-manage',
      component: () => import('../views/table-goods-manage.vue')
    },
    {
      path: '/storehouse-manage',
      component: () => import('../views/table-storehouse-manage.vue')
    },
    {
      path: '/finance',
      component: () => import('../views/table-finance.vue')
    },
    {
      path: '/futures',
      component: () => import('../views/table-futures.vue')
    },
    {
      path: '/statistics',
      component: () => import('../views/table-statistics.vue')
    },
    {
      path: '/spy',
      component: () => import('../views/table-spy.vue')
    }
  ]
})
