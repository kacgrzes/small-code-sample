// @TODO: look at: https://github.com/ruanyf/css-modules-demos and try to improve css-modules
// @TODO: there is problem with CSS hash reloading when changing js and vice versa
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');
const cssLoaderQuery = 'css?modules&importLoaders=1&localIdentName=[name]--[local]--[hash:base64:5]!sass!postcss';
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const constants = require('./constants');

exports.generateStylesConfig = function () {
  return {
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loaders: [
            'style',
            cssLoaderQuery,
          ],
          include: [constants.SRC_DIR, /flexboxgrid/],
        },
        {
          test: /\.css$/,
          loader: 'style!css?modules&importLoaders=1',
        },
        { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          loader: 'file?name=fonts/[name].[ext]',
        },
        { test: /\.(jpg|jpeg|png|gif)$/,
          exclude: /node_modules/,
          loader: 'file?name=images/[name].[ext]',
        },
      ],
    },
    postcss: function () {
      return [autoprefixer, precss];
    },
  };
};

exports.extractCSS = function () {
  return {
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract(
            'style',
            cssLoaderQuery),
          include: constants.SRC_DIR,
        },
        {
          test: /\.css$/,
          loader: 'style!css?modules&importLoaders=1',
        },
        { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
          loader: 'file?name=fonts/[name].[ext]',
        },
        { test: /\.(jpg|jpeg|png|gif)$/,
          exclude: /node_modules/,
          loader: 'file?name=images/[name].[ext]',
        },
      ],
    },
    postcss: function () {
      return [autoprefixer, precss];
    },
    plugins: [
      new ExtractTextPlugin('[name].[chunkhash:5].css'),
    ],
  };
};

exports.purifyCSS = function (PATHS) {
  return {
    plugins: [
      new PurifyCSSPlugin({
        basePath: process.cwd(),
        paths: PATHS,
      }),
    ],
  };
};
