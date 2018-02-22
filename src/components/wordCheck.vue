<template lang="pug">
  layout
    .word(slot="main")
      transition(name="slide-fade" mode="out-in")
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
/* enter、 leave アニメーションで異なる間隔やタイミング関数を利用することができます */
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s ease;
}
.slide-fade-enter{
  transform: translateY(10px);
  opacity: 0;
}
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
