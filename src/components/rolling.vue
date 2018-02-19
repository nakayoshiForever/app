<template lang="pug">
  .rolling
    div {{ test }}
    img(src='../assets/images/1.jpg')
</template>

<script>
import Layout from '@/components/layout/default'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'rolling',
  data () {
    return {
    }
  },
  computed: mapGetters({
    'test': 'test',
  }),
  components: {
    Layout
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .top {
    
  }
</style>
