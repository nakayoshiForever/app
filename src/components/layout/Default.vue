<template lang="pug">
  .el-container
    .el-header 
      .el-header-logo ふうふの地雷探索機
    .el-main
      slot(name="main")
</template>

<script>
export default {
  name: 'Default',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {
  margin: 0;
}
.el-container {
  display: block;
}

.el-header, .el-footer {
  background-color: var(--main-color);
  background-color: #4E4747;
}

.el-header {
  padding-left: 10px;
  color: #FFFFFF;
  line-height: 60px;
  border-bottom: 4px solid #CDEF23;
}

.el-header-logo {
  font-weight: bold;
  letter-spacing: 1px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
}

.el-main {
  background-color: #ffffff;
  color: #333;
  padding: 0;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
