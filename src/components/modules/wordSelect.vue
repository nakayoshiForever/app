<template lang="pug">
  .word-select
    .word-header おこワードを選択してください 
    .word-lists
      .word-list(v-for="data in datas")
        wordCheckbox(:data="data", :_id="data._id")
    .word-button
      el-button(type="primary" round @click="sendAnswer()") 決定する！
</template>
<script>
import datas from '@/components/wordCheck' 
import wordCheckbox from '@/components/modules/wordCheckbox' 
export default {
  name: 'wordSelect',
  props: {
    datas
  },
  methods: {
    sendAnswer () {
      this.$store.dispatch('sendAnswer')
    }
  },
  components: {
    wordCheckbox,
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
