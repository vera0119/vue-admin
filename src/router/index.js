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
        name: 'ui-elements',
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
        }, {
          path: 'tag',
          name: 'tag',
          meta: {
            label: 'Tag'
          },
          component: resolve => require(['@/views/Tag'], resolve)
        }, {
          path: 'badge',
          name: 'badge',
          meta: {
            label: 'Badge'
          },
          component: resolve => require(['@/views/Badge'], resolve)
        }, {
          path: 'progress',
          name: 'progress',
          meta: {
            label: 'Progress'
          },
          component: resolve => require(['@/views/Progress'], resolve)
        }, {
          path: 'tree',
          name: 'tree',
          meta: {
            label: 'Tree'
          },
          component: resolve => require(['@/views/Tree'], resolve)
        }, {
          path: 'alert',
          name: 'alert',
          meta: {
            label: 'Alert'
          },
          component: resolve => require(['@/views/Alert'], resolve)
        }, {
          path: 'message',
          name: 'message',
          meta: {
            label: 'Message'
          },
          component: resolve => require(['@/views/Message'], resolve)
        }, {
          path: 'messageBox',
          name: 'messageBox',
          meta: {
            label: 'MessageBox'
          },
          component: resolve => require(['@/views/MessageBox'], resolve)
        }, {
          path: 'notification',
          name: 'notification',
          meta: {
            label: 'Notification'
          },
          component: resolve => require(['@/views/Notification'], resolve)
        }, {
          path: 'loading',
          name: 'loading',
          meta: {
            label: 'Loading'
          },
          component: resolve => require(['@/views/Loading'], resolve)
        }]
      }]
    }
  ]
})
