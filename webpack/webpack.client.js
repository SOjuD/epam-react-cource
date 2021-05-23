const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const {common, isDev} = require('./webpack.common');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../public'),
  assets: 'assets/',
}

module.exports = merge(common, {
  name: "client",
  target: "web",
  entry: [
    isDev && 'webpack-hot-middleware/client',
    `${PATHS.src}/client.js`,
  ].filter(Boolean),
  output: {
    filename: 'js/[name].js',
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
    isDev && new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
    ]),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      }
    ]
  }
})