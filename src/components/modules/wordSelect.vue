<template lang="pug">
  .word-select
    .word-header
      .word-header-tab.ng(@click="changeCompType(1)") おこ
      .word-header-tab.ok(@click="changeCompType(0)") にこ
    .word-header-line(:class="compType")
    .word-wraps
      .word-lists
        .word-list(v-for="data in datas")
          wordCheckbox(:data="data", :_id="data._id")
      .word-button
        el-button(type="primary" round @click="sendAnswer()") 決定する！
</template>
<script>
import datas from '@/components/wordCheck' 
import wordCheckbox from '@/components/modules/wordCheckbox' 
import {mapActions, mapGetters, mapState} from 'vuex'
export default {
  name: 'wordSelect',
  props: {
    datas
  },
  computed: {
    ...mapGetters({
      compType: 'compType'
    }),
  },
  methods: {
    sendAnswer () {
      this.$store.dispatch('sendAnswer')
    },
    changeCompType (index) {
      this.$store.dispatch('setCompType', index)
      this.$store.dispatch('setCompType', index)
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
    display: flex;
    width: 100%;
    &-tab {
      width: 50%;
      box-sizing: border-box;
      padding: 10px;
    }
  }
  .word-header-line {
    width: 100%;
    height: 10px;
  }
  .ok {
    background: #fdd;
  }
  .ng {
    background: #ddf;
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
