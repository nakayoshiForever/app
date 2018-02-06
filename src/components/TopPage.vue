<template lang="pug">
  layout
    .top(slot="main") main
</template>

<script>
import Layout from '@/components/layout/default'
export default {
  name: 'TopPage',
  data () {
    return {
    }
  },
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
