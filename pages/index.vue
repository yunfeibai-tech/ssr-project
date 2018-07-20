<template>
  <div>
   {{text}}
    <div :key="index" v-for='(obj,index) in text'>
      <div class="item-card">
        <p>{{obj.digest}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = require('./index.js')
</script>

<style lang="less" scoped>
  @import "index";
</style>
