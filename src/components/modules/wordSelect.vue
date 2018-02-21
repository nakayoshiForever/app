<template lang="pug">
.word-select
    .word-header {{data.datetime}} のおこ！
    .word-lists
      .word-list(v-for="word, index in data.words")
        el-checkbox(v-model="index" :label="word" border)
</template>
<script>
import data from '@/components/wordCheck' 
export default {
  name: 'wordSelect',
  data () {
    return {
    }
  },
  components: {
  },
  props: {
    data
  }
}
</script>
