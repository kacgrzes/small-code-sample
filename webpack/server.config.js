const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const constants = require('./constants.js');

exports.generateDevServerConfig = function (options = {}) {
  return {
    entry: [
      'react-hot-loader/patch',
      constants.SRC_DIR,
    ],
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      stats: 'errors-only',
      host: options.host || 'localhost',
      port: options.port || 8080,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multiStep: true,
      }),
      new DashboardPlugin(),
    ],
  };
};
