/**
 * 告警管理模块路由
 */
const routes = {
  path: 'alarm',
  component: () => import(/* webpackChunkName: "web" */ '../views/routerView.vue'),
  children: [
    {
      path: '',
      redirect: 'index'
    },
    {
      path: 'index',
      name: 'alarmIndex',
      component: () => import(/* webpackChunkName: "alarm" */ '../views/alarm/index.vue')
    },
    {
      path: 'list',
      name: 'alarmList',
      component: () => import(/* webpackChunkName: "alarmList" */ '../views/alarmList/index.vue')
    }
  ]
}

export default routes
