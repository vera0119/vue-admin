// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import 'font-awesome/css/font-awesome.min.css'
import '@/css/app.css'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

// import 'element-ui/lib/theme-default/index.css'
// import '@/css/theme/index.css'

import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI, { locale })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
