/**
 * 概览模块路由
 */
const routes = {
  name: 'overview',
  path: 'overview',
  component: () => import(/* webpackChunkName: "overview" */ '../views/overview/index.vue')
}

export default routes
