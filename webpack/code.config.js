const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const constants = require('./constants.js');

exports.generateOptimizePlugins = function () {
  return {
    plugins: [
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
      new OptimizeJsPlugin({
        sourceMaps: false,
      }),
      new CleanWebpackPlugin([constants.BUILD_DIR], {
        root: process.cwd(),
      }),
    ],
  };
};
