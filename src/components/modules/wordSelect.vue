<template lang="pug">
.word-select
  .word-header {{data.datetime}} の{{data.type}}！
  .word-lists
    .word-list(v-for="word, index in data.words")
      el-checkbox(v-model="index" :label="word" border)
  .word-button
    el-button(type="primary" round) 決定する！
</template>
<script>
import data from '@/components/wordCheck' 
export default {
  name: 'wordSelect',
  components: {
  },
  props: {
    data
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .word-header {
    padding: 10px;
    background: #ddd;
  }
  .word-lists {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    padding: 10px 20px 20px 20px;
  } 
  .word-list {
    margin: 2px; 
  }
  .word-button {
    margin: 40px 0 30px 0;
    text-align: center;
  }
</style>
