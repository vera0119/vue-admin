const state = {
  data: [],
  data2: [],
  props: {
    children: 'children',
    label: 'label',
    disabled: 'disabled'
  },
  props2: {
    label: 'name',
    children: 'zones'
  }
}

const mutations = {
  setData(state, data) {
    state.data = data
  },
  setData2(state, data) {
    state.data2 = data
  }
}

let count = 1

const actions = {
  async getData({ commit, state }) {
    commit('setData', await getData())
  },
  async getData2({ commit, state }) {
    commit('setData2', await getData2())
  },
  async getData3({ commit, state }, { name } = {}) {
    if (name == null) {
      return [{ name: 'Root1' }, { name: 'Root2' }]
    }

    let hasChild
    if (name === 'region1') {
      hasChild = true
    } else if (name === 'region2') {
      hasChild = false
    } else {
      hasChild = Math.random() > 0.5
    }

    if (hasChild) {
      return [{
        name: 'zone' + count++
      }, {
        name: 'zone' + count++
      }]
    } else {
      return []
    }
  }
}

function getData() {
  return Promise.resolve([{
    label: 'Level one 1',
    children: [{
      label: 'Level two 1-1',
      children: [{
        label: 'Level three 1-1-1'
      }]
    }]
  }, {
    label: 'Level one 2',
    children: [{
      label: 'Level two 2-1',
      children: [{
        label: 'Level three 2-1-1'
      }]
    }, {
      label: 'Level two 2-2',
      children: [{
        label: 'Level three 2-2-1'
      }]
    }]
  }, {
    label: 'Level one 3',
    children: [{
      label: 'Level two 3-1',
      children: [{
        label: 'Level three 3-1-1'
      }]
    }, {
      label: 'Level two 3-2',
      children: [{
        label: 'Level three 3-2-1'
      }]
    }]
  }])
}

function getData2() {
  return Promise.resolve([{
    id: 1,
    label: 'Level one 1',
    children: [{
      id: 3,
      label: 'Level two 2-1',
      children: [{
        id: 4,
        label: 'Level three 3-1-1'
      }, {
        id: 5,
        label: 'Level three 3-1-2',
        disabled: true
      }]
    }, {
      id: 2,
      label: 'Level two 2-2',
      disabled: true,
      children: [{
        id: 6,
        label: 'Level three 3-2-1'
      }, {
        id: 7,
        label: 'Level three 3-2-2',
        disabled: true
      }]
    }]
  }])
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
