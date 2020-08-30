<template>
  <el-container class="web-container">
    <!-- <el-aside width="200px"><web-aside /></el-aside> -->
    <el-main>
      <search-panel></search-panel>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部任务" name="first">
          <task-list/>
        </el-tab-pane>
        <el-tab-pane label="最后状态" name="second">
          <status-list/>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>
<script>
// import webAside from './aside.vue'
import searchPanel from './components/searchPanel.vue'
import taskList from './taskList.vue'
import statusList from './statusList.vue'
export default {
  components: { searchPanel, taskList, statusList },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick () {}
  }
}
</script>

<style lang="postcss" scoped>
.web-container {
  height: 100%;
}
.el-tabs{
  margin-top: 24px;
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
