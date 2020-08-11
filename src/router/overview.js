/**
 * 概览模块路由
 */
const routes = {
  path: 'overview',
  component: () => import(/* webpackChunkName: "overview" */ '../views/Overview.vue'),
  children: [
    {
      path: '',
      redirect: 'trend'
    },
    {
      path: 'trend',
      name: 'trend',
      component: () => import(/* webpackChunkName: "trend" */ '../views/overview/trend/index.vue')
    },
    {
      path: 'page',
      name: 'page',
      component: () => import(/* webpackChunkName: "page" */ '../views/overview/page/index.vue')
    },
    {
      path: 'user',
      name: 'user',
      component: () => import(/* webpackChunkName: "page" */ '../views/overview/user/index.vue')
    },
    {
      path: 'client',
      name: 'client',
      component: () => import(/* webpackChunkName: "client" */ '../views/overview/client/index.vue')
    }
  ]
}

export default routes
