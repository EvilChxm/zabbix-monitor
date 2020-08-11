import Header from '../components/common/header.vue'
export default {
  components: { Header },
  render (h) {
    return (
      <el-container>
        <el-header><Header/></el-header>
        <div>
          <router-view/>
        </div>
      </el-container>
    )
  }
}
