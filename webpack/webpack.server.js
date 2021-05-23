const {merge} = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const {common, isDev} = require('./webpack.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: `./src/serverRenderer.js`,
  externals: [nodeExternals()],
  output: {
    filename: `./serverRenderer.js`,
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.((c|sa|sc)ss)$/,
        use: [
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
  },
});
