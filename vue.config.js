module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assete': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'common': '@/common',
        'views':'@/views',
      }
    }
  }
}