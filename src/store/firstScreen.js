const state = {
  started: false,
  isReady: false
}

const getters = {
  started: state => state.started,
  isReady: state => state.isReady
}

const mutations = {
  ready: state => (state.isReady = true),
  start: state => (state.started = true),
  end: state => (state.started = false)
}

const actions = {
  ready: ({commit}) => {
    return new Promise(resolve => {
      commit('ready')
      resolve()
    })
  },
  start: ({commit}) => {
    return new Promise(resolve => {
      commit('start')
      resolve()
    })
  },
  end: ({commit}) => {
    return new Promise(resolve => {
      commit('end')
      resolve()
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}
