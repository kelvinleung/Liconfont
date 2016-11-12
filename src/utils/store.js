const Vue = require('vue')
const Vuex = require('vuex')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toasting: false,
    msg: ''
  },
  mutations: {
    switchToast: (state, msg) => {
      state.msg = msg
      state.toasting = !state.toasting
    }
  }
})
