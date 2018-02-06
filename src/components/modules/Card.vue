<template lang="pug">
el-row
  el-col(:span="6" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 2 : 0")
    el-card(:body-style="{ padding: '0px' }")
      img.image(:src="imageSrc")
      div(style="padding: 14px;")
        span Yummy hamburger
        .bottom.clearfix
          time.time {{ currentDate }}
          el-button.button(type="text") button
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      imageSrc: 'https://placehold.jp/300x300.png',
      currentDate: '2017-10-11'
    }
  },
  components: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
