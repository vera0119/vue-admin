// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/styles/main.scss'

import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'medium' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
