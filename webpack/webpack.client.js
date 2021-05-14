const { merge } = require('webpack-merge');
const {common, PATHS, filename, isProd} = require('./webpack.common');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
  name: "client",
  target: "web",
  mode: process.env.NODE_ENV,
  entry: {
    app: PATHS.src,
  },
  output: {
    filename: filename('js'),
    path: PATHS.dist,
    publicPath: "/"
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: isProd
      }
    })
  ]
})