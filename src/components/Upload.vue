<template lang="pug">
  layout
    .upload(slot="main") main
</template>

<script>
import Layout from '@/components/layout/default'
export default {
  name: 'Upload',
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
  .upload {
    
  }
</style>
