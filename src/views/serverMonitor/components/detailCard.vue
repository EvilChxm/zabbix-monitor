<template>
  <div class="detail-card">
    <div class="detail-card__title">
      <slot name="title">
        内存
      </slot>
    </div>
  <div class="detail-card__content">
    <div class="detail-card-item" v-for="item in list" :key="item.name">
      <div class="chart-container" :id="item.name | createId"></div>
    </div>
  </div>
  </div>
</template>

<script>
import pieChart from '../../../components/g2/pieChart'
export default {
  mixins: [pieChart],
  props: ['list'],
  data () {
    return {
      pieData: [
        { type: '一线城市', value: 0.19 },
        { type: '二线城市', value: 0.21 },
        { type: '三线城市', value: 0.27 },
        { type: '四线及以下', value: 0.33 }
      ]
    }
  },
  filters: {
    createId: function (value) {
      return `detail-chart-${value}`
    }
  },
  mounted () {
    this.list.forEach(v => {
      this.renderPieChart(`detail-chart-${v.name}`, this.pieData)
    })
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.detail-card{
  .detail-card__title{
    position: relative;
    padding: 4px 16px;
    color: #409EFF;
    font-size: 16px;
    margin-bottom: 8px;
    &:before{
      content: '';
      position: absolute;
      top:0;
      left: 0;
      height: 100%;
      width: 6px;
      background-color: #409EFF;
    }
  }
  .detail-card__content{
    height: 200px;
    display: flex;
    padding: 16px 24px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    // box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
  .detail-card-item{
    width: 0;
    flex: 1;
    .chart-container{
      width: 100%;
      height: 100%;
    }
  }
}
.detail-card + .detail-card{
  margin-top: 24px;
}
</style>
