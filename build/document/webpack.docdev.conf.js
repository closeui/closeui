var utils = require('../utils')
var webpack = require('webpack')
var config = require('../../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.docDev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.docDev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: config.docDev.template,
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
})

// var utils = require('../utils')
// var webpack = require('webpack')
// var merge = require('webpack-merge')
// var config = require('../../config')
// var devWebpackConfig = require('./webpack.base.conf')
// var HtmlWebpackPlugin = require('html-webpack-plugin')
// var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// 
// var entry = config.docDev.entry
// // add hot-reload related code to entry chunks
// Object.keys(entry).forEach(function (name) {
//   entry[name] = ['./build/dev-client'].concat(entry[name])
// })
// 
// console.log(entry)
// 
// var docDevWebpackConfig = Object.assign({}, devWebpackConfig)
// 
// // var index = docDevWebpackConfig.plugins.findIndex(function (plugin) {
// //   return plugin instanceof HtmlWebpackPlugin
// // })
// // 
// // docDevWebpackConfig.plugins.splice(index, 1, new HtmlWebpackPlugin({
// //   filename: 'index.html',
// //   template: config.docDev.template,
// //   inject: true
// // }))
// // 
// // docDevWebpackConfig.entry = entry
// // 
// // module.exports = docDevWebpackConfig
// // 
// module.exports = merge(docDevWebpackConfig, {
//   entry: entry,
//   module: {
//     // rules: utils.styleLoaders({ sourceMap: config.docDev.cssSourceMap })
//   },
//   // cheap-module-eval-source-map is faster for development
//   devtool: '#cheap-module-eval-source-map',
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': config.docDev.env
//     }),
//     // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoEmitOnErrorsPlugin(),
//     // https://github.com/ampedandwired/html-webpack-plugin
//     new HtmlWebpackPlugin({
//       filename: 'index.html',
//       template: config.docDev.template,
//       inject: true
//     }),
//     new FriendlyErrorsPlugin()
//   ]
// })
