import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import axiosBase from 'axios'

const mockURL = 'http://localhost:3000';
const apiURL = '/word';
const showDataNum = 20

const axios = axiosBase.create({
  baseURL: apiURL,
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
    dataRemainder: [],
    wordAnswers: [],
    wordComps: ['loading', 'wordSelect', 'wordNone'],
    wordComp: 'loading',
    compTypes: ['ok', 'ng'],
    compType: 'ng',
  },
  getters: {
    datas: (state) => state.datas,
    dataRemainder: (state) => state.dataRemainder,
    dataRemainderById: (state) => (_id) => state.dataRemainder.find(data => data._id === _id),
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
    deleteRemainderData: (state, _id) => {
      let index = state.dataRemainder.find((data, index) => {
        if (data._id === _id) return index
      })
      state.dataRemainder.splice(index, 1)
    },
    addData: (state, data) => {state.datas.push(data)},
    addDataRemainder: (state, data) => {state.dataRemainder.push(data)},
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
          commit('setData')// 初期化
          let count = 0
          res.data.forEach((data, index) => {
            if (data.text && data.text.length > 2 && !getters.alreadyWord(data.text)) {
              if (count < showDataNum) {
                commit('addData', data)
                commit('addAnswer', {_id: data._id, text: data.text, value: false})
              } else {
                commit('addDataRemainder', data)
              }
              count ++
            }
          })
        })
        .catch((e) => {
        })
    },
    setDataFromRemainder({commit, getters, dispatch}) {
      let count = 0
      console.log(getters.dataRemainder)
      getters.dataRemainder.forEach(data => {
        if (count < 20) {
          commit('addData', data)
          commit('deleteRemainderData', data)
          commit('addAnswer', {_id: data._id, text: data.text, value: false})
          count ++
        }
      })
    },
    sendAnswer ({commit, getters, dispatch}) {
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
            dispatch('sendAfter', true)
          })
          .catch(() => {
            dispatch('sendAfter', false)
          })
      })
    },
    setCompType ({commit, getters, dispatch}, index) {
      // 初期化
      commit('setCompType', index)
      commit('setData')
      commit('setAnswer')
      dispatch('getAPI')
    },
    sendAfter({commit, getters, dispatch}, sendStatus) {
      commit('setWordComp', 0)
      commit('setData', '')
      if (getters.dataRemainder.length > 0) {
        dispatch('setDataFromRemainder')
        commit('setWordComp', 1)
      } else {
        commit('setWordComp', 2)
      }
    }
  },
  modules: {
  }
})
