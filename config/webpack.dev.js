var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  //devtool: 'cheap-module-eval-source-map',
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },
//   resolve: {
//     alias: {
//         actions: srcPath('app/actions'),
//         selectors: srcPath('app/selectors'),
//         // ui: srcPath('app/ui'),
//         // logger: srcPath('util/logger'),
//     },
//     // ...
// },
});