import {createStore} from 'vuex'
import firstScreen from '@/store/firstScreen'
import listGame from '@/store/listGame'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {firstScreen, listGame},
  strict: true
})
