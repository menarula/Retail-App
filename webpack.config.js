const Webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')

require('file-loader')

const IS_DEV = process.env.NODE_ENV === 'development'

const definePlugin = new Webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': IS_DEV ? JSON.stringify('development') : JSON.stringify('production')
  }
})

module.exports = { // eslint-disable-line
  devtool: 'inline-source-map',
  entry: {
    'my-retail-app': './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    definePlugin,
    new Webpack.LoaderOptionsPlugin({
      options: {
        // context: filePaths.root,
        postcss: function () {
          return [ autoprefixer ]
        }
      }
    })
  ],
  resolve: {
    modules: [
      'src',
      'node_modules'
    ],
    extensions: ['.json', '.js', '.jsx']
  },
  module: {
    noParse: [
      /sinon\//
    ],
    rules: [
      {
        test: /\.less$/,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }, {
        test: /\.(jpe?g|png|gif|svg)/,
        loader: 'url-loader',
        query: {
          hash: 'sha512',
          digest: 'hex',
          name: '[name]-[hash].[ext]',
          limit: 32000
        }
      }
    ]
  }
}
