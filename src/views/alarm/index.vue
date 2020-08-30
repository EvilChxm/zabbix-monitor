<template>
  <section class="e-dashboard">
    <div class="info-card">
      <card title="待解决故障消息"></card>
      <card title="提醒消息数量"></card>
      <card title="系统消息数"></card>
    </div>
    <div class="search-section">
      <search-panel/>
    </div>
    <div class="chart-section">
      <chart-card>
        <div class="chart-container" id="lineChart"></div>
      </chart-card>
    </div>

    <div class="chart-section">
      <warning></warning>
    </div>
  </section>
</template>

<script>
import lineChart from '../../components/g2/lineChart'
import card from './component/card.vue'
import chartCard from './component/chartCard.vue'
import warning from './component/warning.vue'
import searchPanel from './component/searchPanel.vue'
export default {
  components: { card, chartCard, warning, searchPanel },
  mixins: [lineChart],
  data () {
    return {
      cardList: [],
      lineData: [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 }
      ]
    }
  },
  mounted () {
    this.renderLineChart('lineChart', this.lineData)
  }

}
</script>

<style lang="postcss" scoped>
.e-dashboard{
  height: 100%;
  padding: 20px;
}
.search-section{
  margin: 16px 0;
}
.info-card, .chart-section{
  margin-top: 16px;
  display: flex;
}
</style>
