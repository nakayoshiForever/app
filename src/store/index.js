import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import axiosBase from 'axios'

const axios = axiosBase.create({
  baseURL: 'http://localhost:3000',
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
  },
  getters: {
    datas: (state) => state.datas,
    wordAnswers: (state) => state.wordAnswers,
    wordTrueAnswers: (state, getters) => getters.wordAnswers.filter(answer => answer.value == true),
    wordComp: (state) => state.wordComp,
    alreadyWord: (state, getters) => (text) => getters.datas.find(data => data.text === text)
  },
  mutations: {
    setData: (state, data) => {
      state.data = data
    },
    addData: (state, data) => {state.datas.push(data)},
    setWordComp: (state, compNo) => {
      state.wordComp = state.wordComps[compNo]
    },
    addAnswer: (state, answer) => {state.wordAnswers.push(answer)},
    updateAnswer: (state, payload) => {
      let answer = state.wordAnswers.find(answer => answer._id === payload._id)
      answer.value = payload.answer
    }
  },
  actions: {
    getAPI ({commit, getters}) {
      axios.get('/ng')
        .then(res => {
          const compIndex = res.data ? 1 : 2
          commit('setWordComp',  compIndex)
          if (!res.data) return
          commit('setData', res.data)
          console.log(getters.alreadyWord('ng'))
          res.data.forEach((data, index) => {
            if (data.text && !getters.alreadyWord(data.text)) {
              commit('addData', data)
              commit('addAnswer', {id: data._id, data: data.text, value: false})
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
      console.log(sendValue)
      //削除するよ
      commit('setData', '')
      commit('setWordComp', 2)
    },
  },
  modules: {
  }
})
