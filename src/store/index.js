import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import axiosBase from 'axios'

const baseURL = 'http://localhost:3000';

const axios = axiosBase.create({
  baseURL: baseURL,
  headers: {
    'ContentType': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datas: [],
    /*
      apiから受け取ったデータ:格納例
      _id:
      text: 'きらい'
     * */
    wordAnswers: [],
    /*
      回答の保持のみ:格納例
        1: true,
        2: false,
        3: false,
     * */
    wordComps: ['loading', 'wordSelect', 'wordNone'],
    wordComp: 'loading',
    compTypes: ['ok', 'ng'],
    compType: 'ng',
  },
  getters: {
    datas: (state) => state.datas,
    wordAnswers: (state) => state.wordAnswers,
    wordTrueAnswers: (state) => state.wordAnswers.filter(answer => answer.value === true),
    wordComp: (state) => state.wordComp,
    alreadyWord: (state, getters) => (text) => getters.datas.find(data => data.text === text),
    compType: (state) => state.compType,
  },
  mutations: {
    setData: (state) => {
      state.datas = []
    },
    setAnswer: (state) => {
      state.wordAnwers = []
    },
    addData: (state, data) => {state.datas.push(data)},
    setWordComp: (state, compNo) => {
      state.wordComp = state.wordComps[compNo]
    },
    addAnswer: (state, answer) => {state.wordAnswers.push(answer)},
    updateAnswer: (state, payload) => {
      let answer = state.wordAnswers.find(answer => answer._id == payload._id)
      answer.value = payload.value
    },
    setCompType: (state, index) => {
      state.compType = state.compTypes[index]
    },
  },
  actions: {
    getAPI ({commit, getters}) {
      axios.get(`/${getters.compType}`)
        .then(res => {
          const compIndex = res.data ? 1 : 2
          commit('setWordComp',  compIndex)
          if (!res.data) return
          commit('setData', res.data)
          res.data.forEach((data, index) => {
            if (data.text && !getters.alreadyWord(data.text)) {
              commit('addData', data)
              commit('addAnswer', {_id: data._id, text: data.text, value: false})
            }
          })
        })
        .catch((e) => {
        })
    },
    sendAnswer ({commit, getters}) {
      //postするよ
      let sendValue = getters.wordTrueAnswers.map(answer => {
        return answer._id
      })
      //削除するよ
      console.log(sendValue)
      sendValue.forEach(value => {
        axios.post('/ng', {
          params: {
            _id: value
          }
        })
          .then(res => {
            commit('setData', '')
            commit('setWordComp', 2)
          })
          .catch()
      })
    },
    setCompType ({commit, getters, dispatch}, index) {
      // 初期化
      commit('setCompType', index)
      commit('setData')
      commit('setAnswer')
      dispatch('getAPI')
    },
  },
  modules: {
  }
})
