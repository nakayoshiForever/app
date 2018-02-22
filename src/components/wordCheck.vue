<template lang="pug">
  layout
    .word(slot="main")
      component(:is="wordComp" :data="data")
</template>

<script>
import Layout from '@/components/layout/default'
import wordSelect from '@/components/modules/wordSelect'
import wordNone from '@/components/modules/wordNone'
import loading from '@/components/modules/loading'
import store from '@/store/index'
import {mapActions, mapGetters, mapState} from 'vuex'
export default {
  name: 'wordCheck',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      wordComp: 'wordComp',
      data: 'data',
    })
  },
  mounted () {
    this.$store.dispatch('getAPI')
  },
  components: {
    Layout,
    wordSelect,
    wordNone,
    loading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .top {
    
  }
</style>
