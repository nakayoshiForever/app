<template lang="pug">
  layout
    .list(slot="main")
      .card-wrap
        card
</template>

<script>
import layout from '@/components/layout/Default'
import card from '@/components/modules/Card'
export default {
  name: 'List',
  data () {
    return {
    }
  },
  components: {
    layout,
    card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-wrap {
}
</style>
