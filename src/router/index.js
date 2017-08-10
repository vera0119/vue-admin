import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Layout from '@/views/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout
    }
  ]
})
