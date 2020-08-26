/**
 * 仪表盘
 * INTERFACE Data {
 *   value: number
 * }
 */
import { Chart, registerShape } from '@antv/g2'

// function creatData () {
//   const data = []
//   const val = (Math.random() * 10).toFixed(1)
//   data.push({ value: +val })
//   return data
// }

export default {
  data () {
    return {
      chart: null,
      color: ['#0086FA', '#FFBF00', '#F5222D']
    }
  },
  methods: {
    registerChartShape () {
      // 自定义Shape 部分
      registerShape('point', 'pointer', {
        draw (cfg, container) {
          const group = container.addGroup({})
          // 获取极坐标系下画布中心点
          const center = this.parsePoint({ x: 0, y: 0 })
          // 绘制指针
          group.addShape('line', {
            attrs: {
              x1: center.x,
              y1: center.y,
              x2: cfg.x,
              y2: cfg.y,
              stroke: cfg.color,
              lineWidth: 5,
              lineCap: 'round'
            }
          })
          group.addShape('circle', {
            attrs: {
              x: center.x,
              y: center.y,
              r: 9.75,
              stroke: cfg.color,
              lineWidth: 4.5,
              fill: '#fff'
            }
          })
          return group
        }
      })
    },
    initChart (elId, data) {
      this.chart = new Chart({
        container: elId,
        autoFit: true,
        height: 500,
        padding: [0, 0, 30, 0]
      })
      this.chart.data(data)
      this.chart.animate(false)

      this.chart.coordinate('polar', {
        startAngle: (-9 / 8) * Math.PI,
        endAngle: (1 / 8) * Math.PI,
        radius: 0.75
      })
      // 仪表盘刻度
      this.chart.scale('value', {
        min: 0,
        max: 10,
        tickInterval: 1
      })

      this.chart.axis('1', false)
      this.chart.axis('value', {
        line: null,
        label: {
          offset: -40,
          style: {
            fontSize: 18,
            fill: '#CBCBCB',
            textAlign: 'center',
            textBaseline: 'middle'
          }
        },
        tickLine: {
          length: -24
        },
        grid: null
      })
      this.chart.legend(false)
      this.chart.tooltip(false)
      this.chart
        .point()
        .position('value*1')
        .shape('pointer')
        .color('#1890FF')
        .animate({
          appear: {
            animation: 'fade-in'
          }
        })
    },
    draw (data) {
      const val = data[0].value
      const lineWidth = 25
      this.chart.annotation().clear(true)
      // 绘制仪表盘背景
      this.chart.annotation().arc({
        top: false,
        start: [0, 1],
        end: [10, 1],
        style: {
          stroke: '#CBCBCB',
          lineWidth,
          lineDash: null
        }
      })
      // 小于 60%的颜色
      if (val <= 6) {
        this.chart.annotation().arc({
          start: [0, 1],
          end: [val, 1],
          style: {
            stroke: this.color[0],
            lineWidth,
            lineDash: null
          }
        })
      }
      // 60% < val <= 80%的颜色
      if (val > 6 && val <= 7) {
        this.chart.annotation().arc({
          start: [0, 1],
          end: [val, 1],
          style: {
            stroke: this.color[1],
            lineWidth,
            lineDash: null
          }
        })
      }
      // 80% < val <= 100%的颜色
      if (val > 7 && val <= 9) {
        this.chart.annotation().arc({
          start: [0, 1],
          end: [val, 1],
          style: {
            stroke: this.color[2],
            lineWidth,
            lineDash: null
          }
        })
      }

      // 绘制指标数字
      this.chart.annotation().text({
        position: ['50%', '85%'],
        content: '合格率',
        style: {
          fontSize: 20,
          fill: '#545454',
          textAlign: 'center'
        }
      })
      this.chart.annotation().text({
        position: ['50%', '90%'],
        content: `${data[0].value * 10} %`,
        style: {
          fontSize: 36,
          fill: '#545454',
          textAlign: 'center'
        },
        offsetY: 15
      })
      this.chart.changeData(data)
    },
    // 使用的API
    render (el, data) {
      this.registerChartShape()
      this.initChart(el, data)
      this.draw(data)
    }
  }
}
