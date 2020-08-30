<template>
  <el-container class="web-create-container">
    <el-main>
      <div class="btn-box">
        <el-button type="primary">保存</el-button>
        <el-button>取消</el-button>
      </div>
      <el-form
        :model="dynamicValidateForm"
        size="small"
        ref="dynamicValidateForm"
        label-width="100px">
        <div class="monitor-task-list">
          <div class="monitor-task-box"
            v-for="(task, index) in dynamicValidateForm.task"
            :key="index">
            <div class="monitor-task-item">
              <el-form-item label="任务名称">
                <el-input v-model="task.name"></el-input>
              </el-form-item>
              <el-form-item label="操作系统">
                <el-radio-group v-model="task.radio">
                  <el-radio :label="1">HTTP/HTTPS</el-radio>
                  <el-radio :label="2">Ping</el-radio>
                  <el-radio :label="3">FTP</el-radio>
                  <el-radio :label="4">TCP</el-radio>
                  <el-radio :label="5">UDP</el-radio>
                  <el-radio :label="6">DNS</el-radio>
                </el-radio-group>
              </el-form-item>
              <div class="flex-item">
                <el-form-item label="主机域名或IP">
                  <el-input v-model="task.name"></el-input>
                </el-form-item>
                <el-form-item label="代理端口">
                  <el-input v-model="task.name"></el-input>
                </el-form-item>
              </div>
              <div class="flex-item">
                <el-form-item label="监控组">
                  <el-select v-model="task.value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="告警组">
                  <el-select v-model="task.value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>

              <el-form-item label="描述">
                <el-input type="textarea" v-model="task.name"></el-input>
              </el-form-item>
            </div>
            <div class="monitor-task-control">
              <span class="task-icon"><i class="el-icon-minus" @click="handleDelete(index)"></i></span>
              <span class="task-icon"><i class="el-icon-plus" @click="handleAdd"></i></span>
            </div>
          </div>
        </div>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      dynamicValidateForm: {
        task: [
          {
            value: ''
          }
        ]
      },
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ]
    }
  },
  methods: {
    handleDelete (index) {
      this.dynamicValidateForm.task.splice(index, 1)
    },
    handleAdd () {
      this.dynamicValidateForm.task.push({
        value: ''
      })
    }
  }
}
</script>

<style lang="less" scoped>
.web-create-container {
  padding: 24px;
  .btn-box{
    text-align: right;
    margin-bottom: 20px;
  }
  .monitor-task-box {
    display: flex;
  }
  .monitor-task-box + .monitor-task-box {
    margin-top: 20px;
  }
  .monitor-task-item {
    flex: 1;
    padding: 16px 24px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
  .monitor-task-control{
    width: 200px;
    margin-left: 20px;
    .task-icon{
      cursor: pointer;
      font-size: 28px;
      color: #8c939d;
      width: 32px;
      height: 32px;
      line-height: 32px;
      text-align: center;
    }
    .task-icon + .task-icon{
      margin-left: 20px;
    }
  }
}
.flex-item {
  display: flex;
  align-items: center;
}
</style>
