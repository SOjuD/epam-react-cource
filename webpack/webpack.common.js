const path = require('path');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const common = {
  mode: process.env.NODE_ENV,
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.sass', '.scss', '.css', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      'react-dom': '@hot-loader/react-dom',
    }
  },
  optimization: {
    moduleIds: 'named'
  },
  devtool: isDev ? 'source-map' : '',
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
}

module.exports = {isDev, isProd, common}