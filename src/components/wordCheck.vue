<template lang="pug">
  layout
    .word(slot="main")
      .word-header {{date}} のおこ！
      .word-lists
        .word-list(v-for="word in words")
          el-checkbox(v-model="wordAnswer[word.id]" :label="word.word" border)
        
</template>

<script>
import Layout from '@/components/layout/default'
export default {
  name: 'wordCheck',
  data () {
    return {
      date: '2018/10/13 11:11',
      words: [
        {
          id: 1,
          word: 'きらい'
        },
        {
          id: 2,
          word: 'むかつく'
        },
        {
          id: 3,
          word: 'かめかめ'
        },
      ],
      wordAnswer: {
        1: true,
        2: false,
        3: false,
      }
    }
  },
  components: {
    Layout
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .top {
    
  }
</style>
