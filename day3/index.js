const helpers = require('../helpers/helpers');

function SolveProblem(part) {
  if(part == 1) {
    Part1();
  } else {
    Part2();
  }
}

function Part1() {
  const input = helpers.getInputAsStringArray('./day3/input.txt');
  
  const gamma = GetGammaBinary(input);
  const epsilon = GetEpsilonBinary(gamma);

  console.log(helpers.BinaryToDecimal(gamma) * helpers.BinaryToDecimal(epsilon));
}

function Part2() {
  const input = helpers.getInputAsStringArray('./day3/input.txt');

  const oxyRating = GetOxygenGenerationRating(input);
  const c02Rating = GetC02Rating(input);

  console.log(helpers.BinaryToDecimal(oxyRating) * helpers.BinaryToDecimal(c02Rating));


}

/**
 * 
 * @param {string[]} binaryNumberList 
 * @returns 
 */
function GetGammaBinary(binaryNumberList) {
  let gamma = "";
  for(let i = 0; i < binaryNumberList[0].length; i++) {
    let bitSum = 0;
    bitSum = binaryNumberList.reduce((prev, curr) => {
      return parseInt(parseInt(prev) + parseInt(curr[i]));
    }, binaryNumberList[0][i]);
    gamma += bitSum > binaryNumberList.length / 2 ? 1 : 0
  }

  return gamma
}

/**
 * 
 * @param {string[]} binaryNumberList 
 * @returns {string}
 */
function GetOxygenGenerationRating(binaryNumberList) {
  for(let i = 0; i < binaryNumberList[0].length; i++) {
    let bitSum = 0;
    let commonBit;

    bitSum = binaryNumberList.reduce((prev, curr) => {
      return parseInt(parseInt(prev) + parseInt(curr[i]));
    }, binaryNumberList[0][i]);

    if (bitSum === binaryNumberList.length / 2) {
      commonBit = '1';
    } else {
      commonBit = bitSum > Math.ceil(binaryNumberList.length / 2) ? '1' : '0'
    }

    binaryNumberList = binaryNumberList.filter((binary) => binary[i] === commonBit)
    if (binaryNumberList.length === 1) {
      return binaryNumberList[0];
    }
  }

  return binaryNumberList[0];
}

function GetC02Rating(binaryNumberList) {
  for(let i = 0; i < binaryNumberList[0].length; i++) {
    let bitSum = 0;
    let commonBit;

    bitSum = binaryNumberList.reduce((prev, curr) => {
      return parseInt(parseInt(prev) + parseInt(curr[i]));
    }, binaryNumberList[0][i]);

    if (bitSum === binaryNumberList.length / 2) {
      commonBit = '0';
    } else {
      commonBit = bitSum > Math.floor(binaryNumberList.length / 2) ? '0' : '1'
    }

    binaryNumberList = binaryNumberList.filter((binary) => binary[i] === commonBit)

    if (binaryNumberList.length === 1) {
      return binaryNumberList[0];
    }
  }

  return binaryNumberList[0];
}

/**
 * 
 * @param {string} gammaBinary 
 * @returns 
 */
function GetEpsilonBinary(gammaBinary) {
  const gammaBits = gammaBinary.split('')
  console.log(gammaBits);
  return gammaBits.map((curr) => curr === '1' ? '0' : '1').join('');
}

const part = process.argv[2];
SolveProblem(part)