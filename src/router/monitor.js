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
      component: () => import(/* webpackChunkName: "server" */ '../views/routerView.vue'),
      children: [
        {
          path: 'list',
          name: 'serverList',
          component: () => import(/* webpackChunkName: "serverList" */ '../views/serverMonitor/index.vue')
        },
        {
          path: 'create',
          name: 'serverCreate',
          component: () => import(/* webpackChunkName: "serverCreate" */ '../views/serverCreate/index.vue')
        }
      ]
    },
    {
      path: 'web',
      component: () => import(/* webpackChunkName: "web" */ '../views/routerView.vue'),
      children: [
        {
          path: 'list',
          name: 'webList',
          component: () => import(/* webpackChunkName: "webList" */ '../views/webMonitor/index.vue')
        },
        {
          path: 'create',
          name: 'webCreate',
          component: () => import(/* webpackChunkName: "webCreate" */ '../views/webCreate/index.vue')
        }
      ]
    }
  ]
}

export default routes
