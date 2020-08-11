<template>
  <el-menu default-active="2" class="el-menu-vertical-demo">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>应用趋势</span>
      </template>
      <el-menu-item index="1-1">实时数据</el-menu-item>
      <el-menu-item index="1-2">历史趋势</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>用户分析</span>
      </template>
      <el-menu-item index="1-1">实时用户轨迹</el-menu-item>
      <el-menu-item index="1-2">新老用户</el-menu-item>
      <el-menu-item index="1-2">用户画像</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span>客户端分析</span>
      </template>
      <el-menu-item index="1-1">区域</el-menu-item>
      <el-menu-item index="1-2">运营商</el-menu-item>
      <el-menu-item index="1-2">终端信息</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-setting"></i>
        <span>页面分析</span>
      </template>
      <el-menu-item index="1-1">页面排行</el-menu-item>
      <el-menu-item index="1-2">性能监控</el-menu-item>
      <el-menu-item index="1-2">访问深度</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
