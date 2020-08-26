<template>
  <div class="search-container">
    <div class="search-ele-box">
      <div class="search-item">
        <!-- <span class="search-item__title">时间段</span> -->
        <div class="search-item__content">
          <el-date-picker
            v-model="value"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
          </el-date-picker>
        </div>
      </div>

    </div>
    <div class="search-button-box">
      <el-button type="primary">搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      value: ''
    }
  }
}
</script>

<style lang="postcss" scoped>
.search-container{
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
}
.search-ele-box{
  display: flex;
  align-items: center;
}
.search-item{
  display: flex;
  align-items: center;
}
.search-item + .search-item{
  margin-left: 16px;
}
.search-item__title{
  margin-right: 16px;
}
.search-item__content{
  width:  200px;
}
</style>
