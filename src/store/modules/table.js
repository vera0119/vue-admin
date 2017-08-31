const state = {
  tableData2: [],
  tableData3: [],
  pageTableData: []
}

const getters = {
  tableData: state => state.tableData2.slice(0, 4)
}

const mutations = {
  setTableData2 (state, data) {
    state.tableData2 = data
  },
  setTableData3 (state, data) {
    state.tableData3 = data
  },
  setPageTableData (state, { data, total }) {
    state.pageTableData = data
    state.pageTableData.total = total
  }
}

const actions = {
  async getTableData({ commit, state }) {
    commit('setTableData2', await getTableData2())
  },
  async getTableData2({ commit, state }) {
    commit('setTableData2', await getTableData2())
  },
  async getTableData3({ commit, state }) {
    commit('setTableData3', await getTableData3())
  },
  async getPageTableData({ commit, state }, { pageSize, currentPage }) {
    const data = await getTableData2()
    commit('setPageTableData', {
      data: data.slice((currentPage - 1) * pageSize, currentPage * pageSize),
      total: data.length
    })
  }
}

function getTableData2() {
  const data = [{
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  }, {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office'
  }, {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  }, {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office'
  }, {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  }, {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home'
  }, {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office'
  }]

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 500)
  })
}

function getTableData3() {
  return Promise.resolve([{
    id: '12987122',
    name: 'Tom',
    amount1: '234',
    amount2: '3.2',
    amount3: 10
  }, {
    id: '12987123',
    name: 'Tom',
    amount1: '165',
    amount2: '4.43',
    amount3: 12
  }, {
    id: '12987124',
    name: 'Tom',
    amount1: '324',
    amount2: '1.9',
    amount3: 9
  }, {
    id: '12987125',
    name: 'Tom',
    amount1: '621',
    amount2: '2.2',
    amount3: 17
  }, {
    id: '12987126',
    name: 'Tom',
    amount1: '539',
    amount2: '4.1',
    amount3: 15
  }])
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
