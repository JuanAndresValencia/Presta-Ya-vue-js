import { createStore } from 'vuex'

export default createStore({
  state: {
    conter: 0
  },
  mutations: {
    setCurrentUser(state, payload) {
      state.conter = payload
    }
  },
  actions: {
    setCurrentUser({commit}, num) {
      commit('setCurrentUser', num)
    }
  },
  modules: {
  }
})
