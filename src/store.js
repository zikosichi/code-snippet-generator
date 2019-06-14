import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    snippets: [
      {
        prefix: '',
        name: 'My Snippet',
        code: '',
        description: '',
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
