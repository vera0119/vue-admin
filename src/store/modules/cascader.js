const state = {
  options: [],
  optionsWithDisabled: [],
  options2: []
}

const mutations = {
  setOptions(state, data) {
    state.options = data
  },
  setOptionsWithDisabled(state, data) {
    state.optionsWithDisabled = data
  },
  setOptions2(state, data) {
    state.options2 = data
  },
  setOptionsChildren(state, data) {
    state.options2[data.index].cities = data.data
  }
}

const actions = {
  async getOptions({ commit, state }) {
    commit('setOptions', await getOptions())
  },
  async getOptionsWithDisabled({ commit, state }) {
    commit('setOptionsWithDisabled', await getOptionsWithDisabled())
  },
  async getOptions2({ commit, state }, val) {
    if (val) {
      commit('setOptionsChildren', getOptions2Children(val))
    } else {
      commit('setOptions2', await getOptions2())
    }
  }
}

function getOptions() {
  const data = [{
    value: 'guide',
    label: 'Guide',
    children: [{
      value: 'disciplines',
      label: 'Disciplines',
      children: [{
        value: 'consistency',
        label: 'Consistency'
      }, {
        value: 'feedback',
        label: 'Feedback'
      }, {
        value: 'efficiency',
        label: 'Efficiency'
      }, {
        value: 'controllability',
        label: 'Controllability'
      }]
    }, {
      value: 'navigation',
      label: 'Navigation',
      children: [{
        value: 'side nav',
        label: 'Side Navigation'
      }, {
        value: 'top nav',
        label: 'Top Navigation'
      }]
    }]
  }, {
    value: 'component',
    label: 'Component',
    children: [{
      value: 'basic',
      label: 'Basic',
      children: [{
        value: 'layout',
        label: 'Layout'
      }, {
        value: 'color',
        label: 'Color'
      }, {
        value: 'typography',
        label: 'Typography'
      }, {
        value: 'icon',
        label: 'Icon'
      }, {
        value: 'button',
        label: 'Button'
      }]
    }, {
      value: 'form',
      label: 'Form',
      children: [{
        value: 'radio',
        label: 'Radio'
      }, {
        value: 'checkbox',
        label: 'Checkbox'
      }, {
        value: 'input',
        label: 'Input'
      }, {
        value: 'input-number',
        label: 'InputNumber'
      }, {
        value: 'select',
        label: 'Select'
      }, {
        value: 'cascader',
        label: 'Cascader'
      }, {
        value: 'switch',
        label: 'Switch'
      }, {
        value: 'slider',
        label: 'Slider'
      }, {
        value: 'time-picker',
        label: 'TimePicker'
      }, {
        value: 'date-picker',
        label: 'DatePicker'
      }, {
        value: 'datetime-picker',
        label: 'DateTimePicker'
      }, {
        value: 'upload',
        label: 'Upload'
      }, {
        value: 'rate',
        label: 'Rate'
      }, {
        value: 'form',
        label: 'Form'
      }]
    }, {
      value: 'data',
      label: 'Data',
      children: [{
        value: 'table',
        label: 'Table'
      }, {
        value: 'tag',
        label: 'Tag'
      }, {
        value: 'progress',
        label: 'Progress'
      }, {
        value: 'tree',
        label: 'Tree'
      }, {
        value: 'pagination',
        label: 'Pagination'
      }, {
        value: 'badge',
        label: 'Badge'
      }]
    }, {
      value: 'notice',
      label: 'Notice',
      children: [{
        value: 'alert',
        label: 'Alert'
      }, {
        value: 'loading',
        label: 'Loading'
      }, {
        value: 'message',
        label: 'Message'
      }, {
        value: 'message-box',
        label: 'MessageBox'
      }, {
        value: 'notification',
        label: 'Notification'
      }]
    }, {
      value: 'navigation',
      label: 'Navigation',
      children: [{
        value: 'menu',
        label: 'NavMenu'
      }, {
        value: 'tabs',
        label: 'Tabs'
      }, {
        value: 'breadcrumb',
        label: 'Breadcrumb'
      }, {
        value: 'dropdown',
        label: 'Dropdown'
      }, {
        value: 'steps',
        label: 'Steps'
      }]
    }, {
      value: 'others',
      label: 'Others',
      children: [{
        value: 'dialog',
        label: 'Dialog'
      }, {
        value: 'tooltip',
        label: 'Tooltip'
      }, {
        value: 'popover',
        label: 'Popover'
      }, {
        value: 'card',
        label: 'Card'
      }, {
        value: 'carousel',
        label: 'Carousel'
      }, {
        value: 'collapse',
        label: 'Collapse'
      }]
    }]
  }, {
    value: 'resource',
    label: 'Resource',
    children: [{
      value: 'axure',
      label: 'Axure Components'
    }, {
      value: 'sketch',
      label: 'Sketch Templates'
    }, {
      value: 'docs',
      label: 'Design Documentation'
    }]
  }]

  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 300)
  })
}

function getOptionsWithDisabled() {
  const data = [{
    value: 'guide',
    label: 'Guide',
    disabled: true,
    children: [{
      value: 'disciplines',
      label: 'Disciplines',
      children: [{
        value: 'consistency',
        label: 'Consistency'
      }, {
        value: 'feedback',
        label: 'Feedback'
      }, {
        value: 'efficiency',
        label: 'Efficiency'
      }, {
        value: 'controllability',
        label: 'Controllability'
      }]
    }, {
      value: 'navigation',
      label: 'Navigation',
      children: [{
        value: 'side nav',
        label: 'Side Navigation'
      }, {
        value: 'top nav',
        label: 'Top Navigation'
      }]
    }]
  }, {
    value: 'component',
    label: 'Component',
    children: [{
      value: 'basic',
      label: 'Basic',
      children: [{
        value: 'layout',
        label: 'Layout'
      }, {
        value: 'color',
        label: 'Color'
      }, {
        value: 'typography',
        label: 'Typography'
      }, {
        value: 'icon',
        label: 'Icon'
      }, {
        value: 'button',
        label: 'Button'
      }]
    }, {
      value: 'form',
      label: 'Form',
      children: [{
        value: 'radio',
        label: 'Radio'
      }, {
        value: 'checkbox',
        label: 'Checkbox'
      }, {
        value: 'input',
        label: 'Input'
      }, {
        value: 'input-number',
        label: 'InputNumber'
      }, {
        value: 'select',
        label: 'Select'
      }, {
        value: 'cascader',
        label: 'Cascader'
      }, {
        value: 'switch',
        label: 'Switch'
      }, {
        value: 'slider',
        label: 'Slider'
      }, {
        value: 'time-picker',
        label: 'TimePicker'
      }, {
        value: 'date-picker',
        label: 'DatePicker'
      }, {
        value: 'datetime-picker',
        label: 'DateTimePicker'
      }, {
        value: 'upload',
        label: 'Upload'
      }, {
        value: 'rate',
        label: 'Rate'
      }, {
        value: 'form',
        label: 'Form'
      }]
    }, {
      value: 'data',
      label: 'Data',
      children: [{
        value: 'table',
        label: 'Table'
      }, {
        value: 'tag',
        label: 'Tag'
      }, {
        value: 'progress',
        label: 'Progress'
      }, {
        value: 'tree',
        label: 'Tree'
      }, {
        value: 'pagination',
        label: 'Pagination'
      }, {
        value: 'badge',
        label: 'Badge'
      }]
    }, {
      value: 'notice',
      label: 'Notice',
      children: [{
        value: 'alert',
        label: 'Alert'
      }, {
        value: 'loading',
        label: 'Loading'
      }, {
        value: 'message',
        label: 'Message'
      }, {
        value: 'message-box',
        label: 'MessageBox'
      }, {
        value: 'notification',
        label: 'Notification'
      }]
    }, {
      value: 'navigation',
      label: 'Navigation',
      children: [{
        value: 'menu',
        label: 'NavMenu'
      }, {
        value: 'tabs',
        label: 'Tabs'
      }, {
        value: 'breadcrumb',
        label: 'Breadcrumb'
      }, {
        value: 'dropdown',
        label: 'Dropdown'
      }, {
        value: 'steps',
        label: 'Steps'
      }]
    }, {
      value: 'others',
      label: 'Others',
      children: [{
        value: 'dialog',
        label: 'Dialog'
      }, {
        value: 'tooltip',
        label: 'Tooltip'
      }, {
        value: 'popover',
        label: 'Popover'
      }, {
        value: 'card',
        label: 'Card'
      }, {
        value: 'carousel',
        label: 'Carousel'
      }, {
        value: 'collapse',
        label: 'Collapse'
      }]
    }]
  }, {
    value: 'resource',
    label: 'Resource',
    children: [{
      value: 'axure',
      label: 'Axure Components'
    }, {
      value: 'sketch',
      label: 'Sketch Templates'
    }, {
      value: 'docs',
      label: 'Design Documentation'
    }]
  }]

  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 300)
  })
}

function getOptions2() {
  const data = [{
    label: 'California',
    cities: []
  }, {
    label: 'Florida',
    cities: []
  }]

  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 300)
  })
}

function getOptions2Children(val) {
  if (val.indexOf('California') > -1 && !state.options2[0].cities.length) {
    return { data: [{ label: 'Los Angeles' }], index: 0 }
  } else if (val.indexOf('Florida') > -1 && !state.options2[1].cities.length) {
    return { data: [{ label: 'Orlando' }], index: 1 }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
