const webpack = require('webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const constants = require('./constants.js');

exports.generateCommonConfig = function () {
  return {
    entry: {
      app: constants.SRC_DIR,
    },
    output: {
      path: constants.BUILD_DIR,
      filename: '[name].js',
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['babel?cacheDirectory'],
          include: constants.SRC_DIR,
          exclude: constants.NODE_MODULES_DIR,
        },
        {
          test: /\.json?$/,
          loaders: ['json'],
          include: constants.SRC_DIR,
          exclude: constants.NODE_MODULES_DIR,
        },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
      root: [constants.SRC_DIR, constants.NODE_MODULES_DIR],
    },
  };
};

exports.generateBuildOutput = function () {
  return {
    output: {
      path: constants.BUILD_DIR,
      filename: '[name].[chunkhash:5].js',
      chunkFilename: '[chunkhash:5].js',
    },
  };
};

exports.generateIndexTemplate = function () {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template: 'webpack/templates/index.ejs',
        title: constants.APP_TITLE,
        appMountId: constants.APP_MOUNT_ID,
        inject: false,
      }),
    ],
  };
};

exports.generateFavicons = function () {
  return {
    plugins: [
      new FaviconsWebpackPlugin({
        logo: 'assets/favicon.png',
        prefix: 'icons/',
      }),
    ]
  }
};

// @TODO: maybe try to split bundles like this: http://survivejs.com/webpack/building-with-webpack/splitting-bundles/
exports.extractBundle = function (options) {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    entry,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest'],
      }),
    ],
  };
};
