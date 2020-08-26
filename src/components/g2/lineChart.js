/**
 * 折线图
 * INTERFACE config {
 *  axis: {
 *    xAxis: string, // x轴key
 *    yAxis: string, // y轴key
 *  }
 * }
 */
import { Chart } from '@antv/g2'

// const data = [
//   { year: '1991', value: 3 },
//   { year: '1992', value: 4 },
//   { year: '1993', value: 3.5 },
//   { year: '1994', value: 5 },
//   { year: '1995', value: 4.9 },
//   { year: '1996', value: 6 },
//   { year: '1997', value: 7 },
//   { year: '1998', value: 9 },
//   { year: '1999', value: 13 }
// ]

export default {
  data () {
    return {
      lineChart: null
    }
  },
  methods: {
    initLineChart (elId) {
      this.lineChart = new Chart({
        container: elId,
        autoFit: true,
        height: 500
      })
    },
    drawLineChart (data) {
      this.lineChart.data(data)
      this.lineChart.scale({
        year: {
          range: [0, 1]
        },
        value: {
          min: 0,
          nice: true
        }
      })

      this.lineChart.tooltip({
        showCrosshairs: true, // 展示 Tooltip 辅助线
        shared: true
      })

      this.lineChart.line().position('year*value').label('value')
      this.lineChart.point().position('year*value')

      this.lineChart.render()
    },
    renderLineChart (el, data) {
      this.initLineChart(el)
      this.drawLineChart(data)
    }
  }
}
