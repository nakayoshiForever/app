<template lang="pug">
  el-checkbox(v-model="answer" :label="word" border @change="updateAnswer()")
</template>
<script>
import {word, index} from '@/components/modules/wordSelect' 
export default {
  name: 'wordCheckbox',
  data () {
    return {
      answer: false
    }
  },
  props: {
    word,
    index,
  },
  methods: {
    updateAnswer (index) {
      this.$store.commit('updateAnswer', { index: this.index, answer: this.answer})
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
