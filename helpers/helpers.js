const fs = require('fs');

function getInputAsNumberArray(path) {
  return fs.readFileSync(path, {encoding: 'utf-8'}).split('\n').map((item) => parseInt(item));
}

exports.getInputAsNumberArray = getInputAsNumberArray;