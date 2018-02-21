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
    data: {},
    wordAnswer: [],
    wordComp: 'loading',
    id: 1
  },
  getters: {
    test (state) {
      return state.test
    }
  },
  mutations: {
  },
  actions: {
    getAPI () {
      axios.get('/')
        .then(res => {
          console.log(res.data)
        })
        .catch(() => {})
    }
  },
  modules: {
  }
})
