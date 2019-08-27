const path = require('path');

const rootPath = path.resolve(__dirname, '..');

function root(...args) {
  return path.join(...[rootPath].concat(args));
}

exports.root = root;
