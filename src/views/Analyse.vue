<template>
  <el-container>
    <el-aside width="200px"><Side/></el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import Side from './analyse/aside'
export default {
  components: { Side },
  data () {
    return {}
  }
}
</script>
