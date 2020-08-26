/**
 * 分析模块路由
 */
const routes = {
  path: 'analyse',
  component: () => import(/* webpackChunkName: "analyse" */ '../views/Analyse.vue'),
  children: [
    {
      path: '',
      redirect: 'trend'
    },
    {
      path: 'trend',
      name: 'trend',
      component: () => import(/* webpackChunkName: "trend" */ '../views/analyse/trend/index.vue')
    },
    {
      path: 'page',
      name: 'page',
      component: () => import(/* webpackChunkName: "page" */ '../views/analyse/page/index.vue')
    },
    {
      path: 'user',
      name: 'user',
      component: () => import(/* webpackChunkName: "page" */ '../views/analyse/user/index.vue')
    },
    {
      path: 'client',
      name: 'client',
      component: () => import(/* webpackChunkName: "client" */ '../views/analyse/client/index.vue')
    }
  ]
}

export default routes
