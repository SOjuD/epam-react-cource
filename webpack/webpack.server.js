const {merge} = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const {common, PATHS} = require('./webpack.common');

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  mode: 'development',
  entry: `./src/serverRenderer.js`,
  externals: [nodeExternals()],
  output: {
    filename: `./src/serverRenderer.js`,
    libraryTarget: 'commonjs2',
  },
});
