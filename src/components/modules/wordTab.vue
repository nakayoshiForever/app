<template lang="pug">
  .word-lists
    .word-list(v-for="data in datas")
      wordCheckbox(:data="data", :id="data.id")
</template>
<script>
import wordCheckbox from '@/components/modules/wordCheckbox' 
import {mapActions, mapGetters, mapState} from 'vuex'
export default {
  name: 'wordTab',
  computed: {
    ...mapGetters({
      datas: 'datas',
    })
  },
  components: {
    wordCheckbox,
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
  .fade-enter-active {
    transition: all .8s ease;
  }
  .fade-leave-active {
    transition: all .8s ease;
  }
  .fade-enter{
    opacity: 0;
  }
  .fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
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
