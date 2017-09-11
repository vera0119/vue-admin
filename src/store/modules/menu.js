const state = {
  list: []
}

const getters = {
  list: state => state.list
}

const mutations = {
  setList (state, list) {
    state.list = list
  }
}

const actions = {
  async getList({ commit, state }, $route) {
    commit('setList', await getList($route))
  }
}

function getList($route) {
  return new Promise((resolve) => {
    const list = [{
      name: 'dashboard',
      icon: 'fa fa fa-dashboard'
    }, {
      name: 'ui-elements',
      icon: 'fa fa-briefcase',
      children: [{
        group: 'Form',
        values: [{name: 'radio'}, {name: 'checkbox'}, {name: 'input'}, {name: 'inputNumber'}, {name: 'select'}, {name: 'cascader'},
          {name: 'switch'}, {name: 'slider'}]
      }, {
        group: 'Data',
        values: [{name: 'table'}, {name: 'pagination'}, {name: 'tag'}, {name: 'badge'}, {name: 'progress'}, {name: 'tree'}]
      }, {
        group: 'Notice',
        values: [{name: 'alert'}, {name: 'message'}, {name: 'messageBox'}, {name: 'notification'}, {name: 'loading'}]
      }]
    }]

    const mapRoute = list => {
      return list.map(item => {
        const route = $route.resolve(item)

        let newItem = item

        if (route) {
          newItem.meta = Object.assign({}, route.route.meta)
        }

        if (item.children) {
          newItem.children.values = item.children.map(child => mapRoute(child.values))
        }

        return newItem
      })
    }
    resolve(mapRoute(list))
  })
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
