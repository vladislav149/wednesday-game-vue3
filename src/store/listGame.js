const state = {
  justDance: false,
  quiz: false,
  guessCharacters: false
}

const getters = {
  isShowVideo: state => state.justDance,
  quiz: state => state.quiz,
  guessCharacters: state => state.guessCharacters,
  isGamePlayed: state => {
    for (const key in state) {
      if (state[key]) return true
    }
    return false
  }
}

const mutations = {
  showVideo: (state, payload) => (state.justDance = payload),
  showQuiz: (state, payload) => (state.quiz = payload),
  showGuessCharacters: (state, payload) => (state.guessCharacters = payload),
  endGames: state => {
    for (const key in state) {
      state[key] = false
    }
  }
}

const actions = {
  showVideo: ({commit}, payload) => {
    return new Promise(resolve => {
      commit('showVideo', payload)
      resolve()
    })
  },
  showQuiz: ({commit}, payload) => {
    return new Promise(resolve => {
      commit('showQuiz', payload)
      resolve()
    })
  },
  showGuessCharacters: ({commit}, payload) => {
    return new Promise(resolve => {
      commit('showGuessCharacters', payload)
      resolve()
    })
  },
  endGames: ({commit}) => {
    return new Promise(resolve => {
      commit('endGames')
      resolve()
    })
  }
}

export default {state, getters, mutations, actions, namespaced: true}
