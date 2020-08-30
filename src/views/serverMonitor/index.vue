<template>
  <el-container class="server-container">
    <!-- <el-aside width="200px"><server-aside /></el-aside> -->
    <el-main>
      <search-panel></search-panel>
      <div class="server-list">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="开启/暂停" width="76">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.value"
                active-color="#13ce66">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="监控任务">
          </el-table-column>
          <el-table-column prop="address" label="服务器"> </el-table-column>
          <el-table-column prop="address" label="系统类型"> </el-table-column>
          <el-table-column prop="address" label="监控频率"> </el-table-column>
          <el-table-column prop="address" label="CPU使用率"> </el-table-column>
          <el-table-column prop="address" label="CPU负载"> </el-table-column>
          <el-table-column prop="address" label="内存使用率"> </el-table-column>
          <el-table-column label="操作" width="140">
            <template>
              <el-button size="mini" type="text" @click="drawer=true">详情</el-button>
              <el-button size="mini" type="text">编辑</el-button>
              <el-button size="mini" type="text">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-main>
    <el-drawer
      :with-header="true"
      size="70%"
      :visible.sync="drawer"
      :direction="direction">
      <div class="drawer-content"><detail/></div>
    </el-drawer>
  </el-container>
</template>
<script>
// import serverAside from './aside.vue'
import searchPanel from './components/searchPanel.vue'
import detail from './detail.vue'
export default {
  components: { searchPanel, detail },
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
