var path = require('path')
var webpack = require('webpack')
var utils = require('../utils')
var config = require('../../config')
var vueLoaderConfig = require('../vue-loader.conf')
var MarkdownItContainer = require('markdown-it-container')
var striptags = require('./strip-tags')

const vueMarkdown = {
  preprocess: (MarkdownIt, source) => {
    MarkdownIt.renderer.rules.table_open = function () {
      return '<table class="table">'
    }
    MarkdownIt.renderer.rules.fence = utils.wrapCustomClass(MarkdownIt.renderer.rules.fence)
    return source
  },
  use: [
    [MarkdownItContainer, 'demo', {
      validate: params => params.trim().match(/^demo\s*(.*)$/),
      render: (tokens, idx) => {
        if (tokens[idx].nesting === 1) {
          const html = utils.convertHtml(striptags(tokens[idx + 1].content, 'script'))

          return `<demo-box>
                    <div slot="demo">${html}</div>
                    <div slot="source-code">`
        }

        // closing tag
        return '</div></demo-box>'
      }
    }]
  ]
}

function resolve (dir) {
  return path.join(__dirname, '../..', dir)
}

module.exports = {
  entry: {
    app: './documents/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'bzui': path.resolve(__dirname, '../src'),
      'vue$': 'vue/dist/vue.esm.js',
      'src': resolve('src')
    }
  },
  resolveLoader: {
    // moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('example'), resolve('documents'), resolve('test')]
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: vueMarkdown
      },
      {
        test: /\.yml$/,
        loader: 'json-loader!yaml-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.serverConfig': {
        portalPrefix: JSON.stringify(config.docBuild.portalPrefix)
      }
    })
  ]
}
