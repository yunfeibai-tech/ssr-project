<template>
  <div>
    <button @click="clickButton">测试</button>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
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
