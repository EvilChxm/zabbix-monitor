<template>
  <el-container class="server-container">
    <el-main>
      <search-panel></search-panel>
      <div class="server-list">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="状态" width="76">
            <template slot-scope="scope">
              <el-tag effect="dark" :type="scope.row.value | typeFilter">已解决</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="监控任务">
          </el-table-column>
          <el-table-column prop="address" label="告警类型"> </el-table-column>
          <el-table-column prop="address" label="服务器"> </el-table-column>
          <el-table-column prop="address" label="监控类型"> </el-table-column>
          <el-table-column prop="address" label="通知类型"> </el-table-column>
          <el-table-column prop="address" label="持续时间"> </el-table-column>
          <el-table-column prop="address" label="时间"> </el-table-column>
          <el-table-column label="操作" width="140">
            <template>
              <el-button size="mini" type="text" @click="drawer=true">详情</el-button>
              <el-button size="mini" type="text">更新状态</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-main>
  </el-container>
</template>
<script>
import searchPanel from './components/searchPanel.vue'
export default {
  components: { searchPanel },
  filters: {
    typeFilter: function (value) {
      // success info warning danger
      return value ? 'success' : 'success'
    }
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      drawer: false,
      direction: 'rtl'
    }
  }
}
</script>

<style lang="postcss" scoped>
.server-container {
  height: 100%;
}
.server-list{
  margin-top: 32px;
}
.drawer-content{
  padding: 8px 20px;
  overflow: auto;
}
</style>
<style lang="less">
.el-drawer__header{
  padding: 8px 0;
  margin-bottom: 8px;
}
.el-drawer__body{
  height: calc(100% - 41px);
  overflow: auto;
}
</style>
