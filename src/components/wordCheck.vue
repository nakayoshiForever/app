<template lang="pug">
  layout
    .word(slot="main")
      component(:is="wordComp" :data="data")
        
</template>

<script>
import Layout from '@/components/layout/default'
import wordSelect from '@/components/modules/wordSelect'
export default {
  name: 'wordCheck',
  data () {
    return {
      data: {
        datetime: '2018/10/13 11:11',
        type: 'おこ',
        words: ['きらい','むかつく','カメカメ'],
      },
      wordAnswer: {
        1: true,
        2: false,
        3: false,
      },
      wordComp: 'wordSelect'
    }
  },
  mounted: {
    
  },
  components: {
    Layout,
    wordSelect
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .top {
    
  }
</style>
