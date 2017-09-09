import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import cascader from './modules/cascader'
import menu from './modules/menu'
import select from './modules/select'
import table from './modules/table'
import tree from './modules/tree'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
  modules: {
    cascader,
    menu,
    select,
    table,
    tree
  }
})
