<template>
  <div class="detail-container">
    <div class="detail-filter-box">
      <detail-filter/>
    </div>
    <div class="detail-content">
      <detail-card :list="chartList">
        <template slot="title">网卡流量</template>
      </detail-card>
      <detail-card :list="chartList1">
        <template slot="title">CPU</template>
      </detail-card>
      <detail-card :list="chartList2">
        <template slot="title">内存</template>
      </detail-card>
      <detail-card :list="chartList3">
        <template slot="title">负载</template>
      </detail-card>
      <detail-card :list="chartList4">
        <template slot="title">磁盘</template>
      </detail-card>
      <detail-card :list="chartList5">
        <template slot="title">系统进程数</template>
      </detail-card>
    </div>
  </div>
</template>

<script>
import detailFilter from './components/detailFilter.vue'
import detailCard from './components/detailCard.vue'
export default {
  components: { detailFilter, detailCard },
  data () {
    return {
      chartList: [
        {
          name: 'inout',
          data: []
        },
        {
          name: 'now',
          data: []
        },
        {
          name: 'avg',
          data: []
        }
      ],
      chartList1: [
        {
          name: 'inout1',
          data: []
        },
        {
          name: 'now1',
          data: []
        },
        {
          name: 'avg1',
          data: []
        }
      ],
      chartList2: [
        {
          name: 'inout2',
          data: []
        },
        {
          name: 'now2',
          data: []
        },
        {
          name: 'avg2',
          data: []
        }
      ],
      chartList3: [
        {
          name: 'inout3',
          data: []
        },
        {
          name: 'now3',
          data: []
        },
        {
          name: 'avg3',
          data: []
        }
      ],
      chartList4: [
        {
          name: 'inout4',
          data: []
        },
        {
          name: 'now4',
          data: []
        },
        {
          name: 'avg4',
          data: []
        }
      ],
      chartList5: [
        {
          name: 'inout5',
          data: []
        },
        {
          name: 'now5',
          data: []
        },
        {
          name: 'avg5',
          data: []
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.detail-container{
  height: 100%;
  .detail-content{
    margin-top: 16px;
  }
}

</style>
