import Vue from 'vue'
import VueRouter from 'vue-router'

import overviewRoutes from './overview' // 概览
import statisticRoutes from './statistics' // 统计
import analyseRoutes from './analyse' // 分析
import alarmRoutes from './alarm' // 告警
import monitorRoutes from './monitor' // 监控

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/main',
    component: () => import(/* webpackChunkName: "main" */ '../views/Layout.js'),
    children: [
      {
        path: '',
        redirect: 'overview'
      },
      {
        path: 'task',
        name: 'task', // 任务管理页
        component: () => import(/* webpackChunkName: "task" */ '../views/Task.vue')
      },
      { ...overviewRoutes },
      { ...analyseRoutes },
      { ...statisticRoutes },
      { ...alarmRoutes },
      { ...monitorRoutes }
    ]
  },
  {
    path: '',
    redirect: 'main'
  }
]
console.log(routes, 'routes')

const router = new VueRouter({
  routes
})

export default router
