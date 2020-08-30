<template>
  <div class="e-header">
    <div class="e-logo" />
    <div class="e-menu">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="overview">数据概览</el-menu-item>
        <el-menu-item index="alarm">告警管理</el-menu-item>
        <el-menu-item index="monitor">监控管理</el-menu-item>
      </el-menu>
    </div>
    <div class="e-header-tool">
      <!-- <div class="e-monitor-type">
        <el-menu mode="horizontal">
          <el-submenu index="2">
            <template slot="title">网站监控</template>
            <el-menu-item index="2-1">API监控</el-menu-item>
            <el-menu-item index="2-2">基础设施监控</el-menu-item>
          </el-submenu>
        </el-menu>
      </div> -->
      <div class="e-header-tool__list">
        <span class="e-tool-item"><i class="el-icon-bell" title="告警通知"></i></span>
        <span class="e-tool-item"><i class="el-icon-s-data" title="仪表盘"></i></span>
      </div>
      <div class="e-avatar">
        <el-avatar size="small" :src="avatarUrl"></el-avatar>
        <span>Evil</span>
      </div>
    </div>
  </div>
</template>

<script>
import defaultAvatar from '../../assets/avatar.png'
export default {
  data () {
    return {
      activeIndex: 'overview',
      avatarUrl: defaultAvatar
    }
  },
  mounted () {
    console.log(this.$route, 111)
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push({
        path: `/main/${key}`
      })
    }
  }
}
</script>

<style scoped lang="less">
.el-menu.el-menu--horizontal{
  border: none;
}
.e-header{
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: solid 1px #e6e6e6;
  .e-logo{
    width: 240px;
    height: 60px;
    margin-right: 16px;
    background-color: #999999;
  }
  .e-menu{
    flex: 1;
  }
  .e-header-tool{
    display: flex;
    justify-content: flex-end;
    width: 360px;
  }
  .e-header-tool__list{
    display: flex;
    align-items: center;
    .e-tool-item{
      cursor: pointer;
      padding: 0 8px;
    }
  }
  .e-avatar{
    display: flex;
    align-items: center;
    color: #909399;
    padding-left: 8px;
    .el-avatar{
      margin-right: 8px;
    }
  }
}
</style>
