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
    /*
      apiから受け取ったデータ:格納例
      datetime: '2018/10/13 11:11',
      type: 'おこ',
      words: ['きらい','むかつく','カメカメ'],
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
    id: 1,//奥さんのid
  },
  getters: {
    test: (state) => {
      return state.test
    },
    data: (state) => state.data,
    wordAnswers: (state) => state.wordAnswers,
    wordTrueAnswers: (state, getters) => getters.wordAnswers.filter(answer => answer.value == true),
    wordComp: (state) => state.wordComp,
    id: (state) => state.id,
    answer: (state) => (index) => state.word 
  },
  mutations: {
    setData: (state, data) => {
      state.data = data
    },
    setWordComp: (state, compNo) => {
      state.wordComp = state.wordComps[compNo]
    },
    addAnswer: (state, answer) => {state.wordAnswers.push(answer)},
    updateAnswer: (state, payload) => {
      let answer = state.wordAnswers.find(answer => answer.index === payload.index)
      answer.value = payload.answer
    }
  },
  actions: {
    getAPI ({commit, getters}) {
      axios.get('/')
        .then(res => {
          const compIndex = res.data ? 1 : 2
          commit('setWordComp',  compIndex)
          if (!res.data) return
          commit('setData', res.data)
          res.data.words.forEach((word, index) => {
            commit('addAnswer', {index: index, word: word, value: false})
          })
        })
        .catch((e) => {
        })
    },
    sendAnswer ({commit, getters}) {
      //postするよ
      let sendValue = getters.wordTrueAnswers.map(answer => {
        return answer.word
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
