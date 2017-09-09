const state = {
  options1: [],
  options2: [],
  options4: []
}

const mutations = {
  setOptions1(state, data) {
    state.options1 = data
  },
  setOptions2(state, data) {
    state.options2 = data
  },
  setOptions4(state, data) {
    state.options4 = data
  }
}

const actions = {
  async getOptions1({ commit, state }) {
    commit('setOptions1', await getOptions1())
  },
  async getOptions2({ commit, state }) {
    commit('setOptions2', await getOptions2())
  },
  async getOptions4({ commit, state }) {
    commit('setOptions4', await getOptions4())
  }
}

function getOptions1() {
  const data = [{
    value: 'Option1',
    label: 'Option1'
  }, {
    value: 'Option2',
    label: 'Option2',
    disabled: true
  }, {
    value: 'Option3',
    label: 'Option3'
  }, {
    value: 'Option4',
    label: 'Option4'
  }, {
    value: 'Option5',
    label: 'Option5'
  }]

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 500)
  })
}

function getOptions2() {
  const data = [{
    label: 'Popular cities',
    options: [{
      value: 'Shanghai',
      label: 'Shanghai'
    }, {
      value: 'Beijing',
      label: 'Beijing'
    }]
  }, {
    label: 'City name',
    options: [{
      value: 'Chengdu',
      label: 'Chengdu'
    }, {
      value: 'Shenzhen',
      label: 'Shenzhen'
    }, {
      value: 'Guangzhou',
      label: 'Guangzhou'
    }, {
      value: 'Dalian',
      label: 'Dalian'
    }]
  }]

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 500)
  })
}

function getOptions4() {
  const data = [{
    value: 'HTML',
    label: 'HTML'
  }, {
    value: 'CSS',
    label: 'CSS'
  }, {
    value: 'JavaScript',
    label: 'JavaScript'
  }]

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 500)
  })
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
