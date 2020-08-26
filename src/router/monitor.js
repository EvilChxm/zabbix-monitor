/**
 * 监控模块路由
 */
const routes = {
  path: 'monitor',
  component: () => import(/* webpackChunkName: "monitor" */ '../views/monitor/index.vue'),
  children: [
    {
      path: '',
      redirect: 'server'
    },
    {
      path: 'server',
      name: 'server',
      component: () => import(/* webpackChunkName: "server" */ '../views/serverMonitor/index.vue')
    }
  ]
}

export default routes
