<template>
  <div>
    <div class="tableList">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="subscribe_time"
          label="关注时间"
          sortable
          width="180"
          :filter-method="filterHandler"
        >
        </el-table-column>
        <el-table-column
          prop="nickname"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="province"
          label="地址">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="标签"
          width="100"
          :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === '家' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.tag}}</el-tag>
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
