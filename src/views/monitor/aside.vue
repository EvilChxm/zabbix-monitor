<template>
  <el-menu
      default-active="serverList"
      class="el-menu-vertical-demo"
      @select="handleSelect">
      <el-menu-item index="serverList">
        <i class="el-icon-menu"></i>
        <span slot="title">服务器监控</span>
      </el-menu-item>
      <el-menu-item index="webList">
        <i class="el-icon-document"></i>
        <span slot="title">网站监控</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push({
        name: key
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
.el-menu{
  height: 100%;
}
</style>
