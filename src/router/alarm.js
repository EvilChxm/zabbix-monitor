/**
 * 告警管理模块路由
 */
const routes = {
  name: 'alarm',
  path: 'alarm',
  component: () => import(/* webpackChunkName: "alarm" */ '../views/Alarm.vue')
}

export default routes
