import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: '1',
    images: {
      
    }
  },
  getters: {
    test (state) {
      return state.test
    }
  },
  mutations: {
  },
  modules: {
  }
})
