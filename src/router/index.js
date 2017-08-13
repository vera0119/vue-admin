import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'layout',
      component: Layout,
      children: [{
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          label: 'Dashboard'
        },
        component: resolve => require(['@/views/Dashboard'], resolve)
      }, {
        path: 'tables',
        name: 'tables',
        meta: {
          label: 'Tables'
        },
        component: resolve => require(['@/views/Tables'], resolve)
      }]
    }
  ]
})
