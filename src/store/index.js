import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'light'
  },
  mutations: {
    CHANGE_VALUE(state, value) {
      state.theme = value
    }
  },
  actions: {
    changeTheme({commit}, value) {
      commit('CHANGE_VALUE', value)
    }
  },
})
