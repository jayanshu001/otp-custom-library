const path = require('path');
const pak = require('../package.json');

module.exports = {
  project: {
    ios: {},
    android: {},
  },
  dependencies: {
    [pak.name]: {
      root: path.join(__dirname, '..'),
    },
  },
};
