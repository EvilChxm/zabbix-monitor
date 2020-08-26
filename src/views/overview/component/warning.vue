<template>
  <div class="e-warning">
    <!-- <div class="warning-header">
      <div class="warning-header__title">告警维度</div>
    </div> -->
    <div class="warning-content">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="告警状态" width="180">
        </el-table-column>
        <el-table-column prop="name" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="address" label="时间"> </el-table-column>
        <el-table-column prop="address" label="详情"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
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
      }]
    }
  }
}
</script>

<style lang="postcss" scoped>
.e-warning {
  width: 0;
  flex: 1;
  padding: 16px 24px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.e-warning + .e-warning {
  margin-left: 16px;
}
.warning-header {
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.warning-header__title {
  font-size: 14px;
  color: #333333;
  flex: 1;
  width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.warning-content {
  height: 380px;
}
</style>
