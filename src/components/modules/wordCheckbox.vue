<template lang="pug">
  .word-checkbox
    el-checkbox(v-model="answer" :label="data.text" border @change="updateAnswer()")
</template>
<script>
import {data, id} from '@/components/modules/wordTab'
export default {
  name: 'wordCheckbox',
  data () {
    return {
      answer: false
    }
  },
  props: {
    data,
    id,
  },
  methods: {
    updateAnswer () {
      this.$store.commit('updateAnswer', {id: this.id, value: this.answer})
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.word-checkbox {
}
</style>
