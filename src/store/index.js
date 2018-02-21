import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import axiosBase from 'axios'

const axios = axiosBase.create({
  baseURL: 'http://localhost:3000/data',
  headers: {
    'ContentType': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
})

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
  actions: {
    
  },
  modules: {
  }
})
