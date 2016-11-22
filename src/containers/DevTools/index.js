switch (process.env.NODE_ENV) {
  case 'test':
    module.exports = require('./DevTools.test.js');
    break;
  default:
    module.exports = require('./DevTools.dev.js');
}
