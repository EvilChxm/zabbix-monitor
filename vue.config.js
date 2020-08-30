module.exports = {
  publicPath: './',
  outputDir: 'docs',
  assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  devServer: {
    // host: '',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://www.baidu.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule
      .use('url-loader')
      .loader('url-loader')
  }
}
