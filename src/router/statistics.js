/**
 * 数据统计模块路由
 */
const routes = {
  path: 'statistic',
  component: () => import(/* webpackChunkName: "statistic" */ '../views/Statistics.vue'),
  children: [
    {
      path: '',
      redirect: 'index'
    },
    {
      path: 'index',
      name: 'statisticIndex',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    }
  ]
}

export default routes
