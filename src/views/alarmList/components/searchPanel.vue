<template>
  <div class="search-container">
    <div class="search-ele-box">
      <div class="search-item">
        <span class="search-item__title">任务状态</span>
        <div class="search-item__content">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="search-item">
        <span class="search-item__title">告警状态</span>
        <div class="search-item__content">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="search-item">
        <span class="search-item__title">时间段</span>
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
      <div class="search-item">
        <span class="search-item__title">关键字</span>
        <div class="search-item__content">
          <el-input v-model="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
    </div>
    <div class="search-button-box">
      <el-button type="primary">搜索</el-button>
      <el-button type="primary" @click="createTask">告警配置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      input: '',
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
      }
    }
  },
  methods: {
    createTask () {
      this.$router.push({
        name: 'serverCreate'
      })
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
  font-size: 14px;
  margin-right: 16px;
}
.search-item__content{
  width:  160px;
}
</style>
