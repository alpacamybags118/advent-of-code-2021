const fs = require('fs');

function getInputAsNumberArray(path, delimiter = '\n') {
  return fs.readFileSync(path, {encoding: 'utf-8'}).split(delimiter).map((item) => parseInt(item));
}

function getNumberGraph(path, delimiter = '\n') {
  return fs.readFileSync(path, {encoding: 'utf-8'}).split(delimiter).map((item) => {
    return item.split('').map((num) => parseInt(num));
  });
}

function getInputAsStringArray(path, delimiter = '\n') {
  return fs.readFileSync(path, {encoding: 'utf-8'}).split(delimiter);
}

function getInputAsStringArrayByLineAndSpace(path) {
  return fs.readFileSync(path, {encoding: 'utf-8'}).split('\n').map((item) => item.split(' '));
}

/**
 * 
 * @param {string} binaryString Binary number in string form
 * @returns {number} Decimal representation of binary
 */
function BinaryToDecimal(binaryString) {
  let decimal = 0;
  binaryString.split('').reverse().forEach((bit, index) => {
    decimal += parseInt(bit) * Math.pow(2, index);
  })

  return decimal;
}

exports.getInputAsNumberArray = getInputAsNumberArray;
exports.getInputAsStringArray = getInputAsStringArray;
exports.BinaryToDecimal = BinaryToDecimal;
exports.getInputAsStringArrayByLineAndSpace = getInputAsStringArrayByLineAndSpace
exports.getNumberGraph = getNumberGraph