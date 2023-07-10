import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('../views/system-login.vue')
    },
    {
      path: '/main',
      component: () => import('../views/system-main.vue'),
      children: [
        {
          path: 'system',
          component: () => import('../views/table/table-system.vue')
        },
        {
          path: 'information/:id',
          component: () => import('../views/table/table-information.vue')
        },
        {
          path: 'model/:id',
          component: () => import('../views/table/table-model-new.vue')
        },
        {
          path: 'trade/:id',
          component: () => import('../views/table/table-trade.vue')
        },
        {
          path: 'goods-manage',
          component: () => import('../views/table/table-goods-manage.vue')
        },
        {
          path: 'storehouse-manage',
          component: () => import('../views/table/table-storehouse-manage.vue')
        },
        {
          path: 'finance',
          component: () => import('../views/table/table-finance.vue')
        },
        {
          path: 'futures',
          component: () => import('../views/table/table-futures.vue')
        },
        {
          path: 'statistics',
          component: () => import('../views/table/table-statistics.vue')
        },
        {
          path: 'spy',
          component: () => import('../views/table/table-spy.vue')
        },
        {
          path: 'memberManage',
          component: () => import('../views/table/member-manage.vue')
        }
      ]
    },
    {
      path: '/user/',
      component: () => import('../views/user-info.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/user/basic-info.vue')
        },
        {
          path: 'password',
          component: () => import('../views/user/password-change.vue')
        }
      ]
    }
  ]
})
