import Header from '../components/common/header.vue'
import '../style/layout.styl'
export default {
  components: { Header },
  render (h) {
    return (
      <el-container class="layout-container">
        <el-header><Header/></el-header>
        <div class="layout-content">
          <router-view/>
        </div>
      </el-container>
    )
  }
}
