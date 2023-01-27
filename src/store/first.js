const state = {
  started: false
}

const getters = {
  started: state => state.started
}

const mutations = {
  start(state) {
    state.started = true
  },
  end(state) {
    state.started = false
  }
}

const actions = {
  start({commit}) {
    return new Promise(resolve => {
      commit('start')
      resolve()
    })
  },
  end({commit}) {
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
