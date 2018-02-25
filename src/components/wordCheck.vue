<template lang="pug">
  layout
    .word(slot="main")
      .word-header
        .word-header-tab.ng(@click="changeCompType(1)")
          .text おこ!
          .ok-svg
            img(src="https://forever-hackchu.mybluemix.net/static/svg/1.svg")
        .word-header-tab.ok(@click="changeCompType(0)")
          .text にこ!
          .ng-svg
            img(src="https://forever-hackchu.mybluemix.net/static/svg/0.svg")
      .word-header-line(:class="compType")
      transition(name="slide-fade" mode="out-in")
        component(:is="wordComp" :datas="datas")
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
      datas: 'datas',
      compType: 'compType',
    })
  },
  mounted () {
    this.$store.dispatch('getAPI')
  },
  methods: {
    changeCompType (index) {
      this.$store.dispatch('setCompType', index)
    }
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

.word-header {
  display: flex;
  width: 100%;
    &-tab {
      width: 50%;
      box-sizing: border-box;
      padding: 10px 0 5px 0;
      text-align: center;
    }
}
.word-header-line {
  width: 100%;
  height: 10px;
}
.ok {
  background: #73c1d5;
}
.ng {
  background: #e4504f;
}
</style>
