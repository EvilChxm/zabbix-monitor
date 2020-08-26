<template>
  <section class="e-dashboard">
    <div class="info-card">
      <card v-for="item in 4" :key="item"></card>
    </div>
    <div class="chart-section">
      <chart-card>
        <div class="chart-container" id="gaugeChart"></div>
      </chart-card>
      <chart-card>
        <div class="chart-container" id="lineChart"></div>
      </chart-card>
      <chart-card>
        <div class="chart-container" id="pieChart"></div>
      </chart-card>
    </div>

    <div class="chart-section">
      <warning></warning>
    </div>
  </section>
</template>

<script>
import gauge from '../../components/g2/Gauge'
import lineChart from '../../components/g2/lineChart'
import pieChart from '../../components/g2/pieChart'
import card from './component/card.vue'
import chartCard from './component/chartCard.vue'
import warning from './component/warning.vue'
export default {
  components: { card, chartCard, warning },
  mixins: [gauge, lineChart, pieChart],
  data () {
    return {
      gaugeData: [{ value: 0.1 }],
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
      ],
      pieData: [
        { type: '一线城市', value: 0.19 },
        { type: '二线城市', value: 0.21 },
        { type: '三线城市', value: 0.27 },
        { type: '四线及以下', value: 0.33 }
      ]
    }
  },
  mounted () {
    this.render('gaugeChart', this.gaugeData)
    this.renderLineChart('lineChart', this.lineData)
    this.renderPieChart('pieChart', this.pieData)
  }

}
</script>

<style lang="postcss" scoped>
.e-dashboard{
  height: 100%;
  padding: 20px;
}
.info-card, .chart-section{
  margin-top: 16px;
  display: flex;
}
</style>
