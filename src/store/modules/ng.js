export default {
  namespaced: true,
  state: {
    datas: [],
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
  },
  getters: {
    datas: (state) => state.datas,
    wordAnswers: (state) => state.wordAnswers,
    wordTrueAnswers: (state, getters) => getters.wordAnswers.filter(answer => answer.value == true),
    wordComp: (state) => state.wordComp,
    id: (state) => state.id,
    answer: (state) => (index) => state.word 
  },
  mutations: {
    addData: (state, data) => {state.datas.push(data)},
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
      axios.get('/ok')
        .then(res => {
          console.log(res.data)
          const compIndex = res.data ? 1 : 2
          commit('setWordComp',  compIndex)
          if (!res.data) return
          res.data.forEach((word, index) => {
            commit('addAnswer', {index: word._id, word: word, value: false})
            commit('addData', word)
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
}
