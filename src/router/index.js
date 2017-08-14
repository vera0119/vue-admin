import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: Layout,
      children: [{
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          label: 'Dashboard'
        },
        component: resolve => require(['@/views/Dashboard'], resolve)
      }, {
        path: 'ui-elements',
        meta: {
          label: 'UI Elements'
        },
        component: { render(c) { return c('router-view') } },
        children: [{
          path: 'table',
          name: 'table',
          meta: {
            label: 'Table'
          },
          component: resolve => require(['@/views/Table'], resolve)
        }, {
          path: 'pagination',
          name: 'pagination',
          meta: {
            label: 'Pagination'
          },
          component: resolve => require(['@/views/Pagination'], resolve)
        }]
      }]
    }
  ]
})
