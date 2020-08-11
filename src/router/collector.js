/**
 * 采集器及监测点模块路由
 */
const routes = {
  path: 'collector',
  component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  children: [
    {
      path: '',
      redirect: 'collectorIndex'
    },
    {
      path: 'index',
      name: 'collectorIndex',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    }
  ]
}

export default routes
