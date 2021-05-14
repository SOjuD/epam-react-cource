const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');


const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/',
}
module.exports.PATHS = PATHS;

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
module.exports.isDev = isDev
module.exports.isProd = isProd

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;
module.exports.filename = filename;

module.exports.common = {
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.sass', '.scss', '.css', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    }
  },
  optimization: optimization(),
  devtool: isDev ? 'source-map' : '',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/static`, to: '' },
    ]),
    new MiniCssExtractPlugin({
      filename: filename('css')
    })
  ],
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
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        loader: 'file-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }
}