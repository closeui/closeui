// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../example/main.js')
  },
  template: path.resolve(__dirname, '../example/index.html'),
  build: {
    env: require('./prod.env'),
    assetsDemoRoot: path.resolve(__dirname, '../demo'),
    assetsRoot: path.resolve(__dirname, '../docs'),
    assetsSubDirectory: '',
    assetsPublicPath: '',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8899,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  },
  docBuild: {
    env: require('./prod.env'),
    template: path.resolve(__dirname, '../documents/index.html'),
    index: path.resolve(__dirname, '../docs/index.html'),
    assetsRoot: path.resolve(__dirname, '../docs'),
    assetsSubDirectory: '',
    productionSourceMap: false
  },
  docDev: {
    env: require('./dev.env'),
    entry: {
      documents: './documents/main.js'
    },
    template: './documents/index.html',
    port: 8898,
    autoOpenBrowser: true,
    proxyTable: {},
    cssSourceMap: false
  }
}
