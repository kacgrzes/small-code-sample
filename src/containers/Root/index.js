switch (process.env.NODE_ENV) {
  case 'production':
    module.exports = require('./Root.prod.js');
    break;
  default:
    module.exports = require('./Root.dev.js');
}
