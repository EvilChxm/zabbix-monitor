<template>
  <div class="task-list">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="date" label="开启/暂停" width="76">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.value" active-color="#13ce66">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="监控任务"> </el-table-column>
      <el-table-column prop="address" label="最后状态"> </el-table-column>
      <el-table-column prop="address" label="最后响应时间"> </el-table-column>
      <el-table-column prop="address" label="最后检查时间"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped></style>
