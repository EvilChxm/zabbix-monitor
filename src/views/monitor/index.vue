<template>
  <el-container class="monitor-container">
    <el-aside width="200px"><monitor-aside/></el-aside>
    <el-main class="monitor-main">
      <router-view/>
    </el-main>
  </el-container>
</template>
<script>
import monitorAside from './aside.vue'
export default {
  components: { monitorAside },
  data () {
    return {}
  }
}
</script>

<style lang="postcss" scoped>
.monitor-container{
  height: 100%;
}
.monitor-main{
  padding: 0;
}
</style>
