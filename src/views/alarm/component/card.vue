<template>
  <div class="e-card">
    <div class="card-header">
      <div class="card-header__title">{{ title }}</div>
      <el-tooltip class="item" effect="dark" content="提示文字">
        <i class="el-icon-warning-outline"></i>
      </el-tooltip>
    </div>
    <div class="card-content">
      <div class="card-content__indicator">
        <i @click="handleClick">999999</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {}
  },
  methods: {
    handleClick () {
      this.$router.push({
        name: 'alarmList'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.e-card {
  width: 0;
  flex: 1;
  padding: 16px 24px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.e-card + .e-card {
  margin-left: 48px;
}

.card-header {
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-header__title {
  font-size: 14px;
  color: #333333;
  flex: 1;
  width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-content {
  .card-content__indicator {
    padding: 24px 0;
    font-size: 28px;
    color: #333333;
    i{
      cursor: pointer;
    }
  }
}
</style>
