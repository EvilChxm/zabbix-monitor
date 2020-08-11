import Vue from 'vue'
import VueRouter from 'vue-router'

import statisticRoutes from './statistics'
import collectorRoutes from './collector'
import overviewRoutes from './overview'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/main',
    component: () => import(/* webpackChunkName: "login" */ '../views/Layout.js'),
    children: [
      {
        path: '',
        redirect: 'overview'
      },
      {
        path: 'task',
        name: 'task', // 任务管理页
        component: () => import(/* webpackChunkName: "task" */ '../views/Login.vue')
      },
      { ...overviewRoutes },
      { ...statisticRoutes },
      { ...collectorRoutes }
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
