<template>
  <div class="e-chart">
    <!-- <div class="chart-header">
      <div class="chart-header__title">集群对比维度</div>
    </div> -->
    <div class="chart-content">
      <slot></slot>
      <!-- <div class="chart-container"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="postcss" scoped>
.e-chart{
  width: 0;
  flex: 1;
  padding: 16px 24px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.e-chart + .e-chart{
  margin-left: 16px;
}
.chart-header{
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chart-header__title{
  font-size: 14px;
  color: #333333;
  flex: 1;
  width: 0;
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.chart-content{
  height: 380px;
}
.chart-container{
  width: 100%;
  height: 100%;
}
</style>
