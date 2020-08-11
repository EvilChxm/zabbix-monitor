import Header from '../components/common/header.vue'
export default {
  components: { Header },
  render (h) {
    return (
      <el-container>
        <el-header><Header/></el-header>
        <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
      </el-container>
    )
  }
}
