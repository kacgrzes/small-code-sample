require('babel-polyfill');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const commonConfig = require('./webpack/common.config.js');
const stylesConfig = require('./webpack/styles.config.js');
const serverConfig = require('./webpack/server.config.js');
const codeConfig = require('./webpack/code.config.js');
const variableConfig = require('./webpack/variables.config.js');

const NODE_ENV = process.env.NODE_ENV || 'develop';

let config = merge(
  commonConfig.generateIndexTemplate(),
  variableConfig.generateFreeVariable('process.env.NODE_ENV', NODE_ENV),
  commonConfig.generateCommonConfig()
);

switch (NODE_ENV) {
  case 'build':
  case 'production':
  case 'stats':
  case 'test':
    console.log('Build config selected!\n');
    config = merge(
      config,
      commonConfig.generateFavicons(),
      commonConfig.generateBuildOutput(),
      commonConfig.extractBundle({
        name: 'vendor',
        entries: ['react'],
      }),
      stylesConfig.extractCSS(),
      codeConfig.generateOptimizePlugins()
    );
    break;
  default:
    console.log('Default config selected!\n');
    config = merge(
      config,
      stylesConfig.generateStylesConfig(),
      serverConfig.generateDevServerConfig()
    );
}

module.exports = validate(config);
