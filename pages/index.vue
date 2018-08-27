<template>
  <div>
    <div class="tableList">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="create_time"
          label="关注时间"
          sortable
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="nick_name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          prop="subscribe"
          label="状态"
          width="100">
          <template slot-scope="scope">
            <span v-if="scope.row.subscribe ==0">
              取消关注
            </span>
            <span v-else>
              已关注
            </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  module.exports = require('./index.js')
</script>

<style lang="less" scoped>
  @import "index";
</style>
