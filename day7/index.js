const helpers = require('../helpers/helpers');

function SolveProblem(part) {
  if(part == 1) {
    Part1();
  } else {
    Part2();
  }
}

function Part1() {
  const input = helpers.getInputAsNumberArray('./day7/input.txt', ',');
  AlignCrabs(input);
}

function Part2() {
  const input = helpers.getInputAsNumberArray('./day7/input.txt', ',');
  AlignCrabsWeighted(input);
}

/**
 * 
 * @param {number[]} crabList 
 */
function AlignCrabs(crabList) {
  let fuelValues = []
  const maxValue = (crabList.sort((a, b) => a-b))[crabList.length - 1]
  
  for(let i = 0; i <= maxValue; i++) {
    fuelValues.push(crabList.reduce((acc, curr) => acc + Math.abs(curr - i), 0))
  }
  console.log((fuelValues.sort((a, b) => a - b))[0])
}

function AlignCrabsWeighted(crabList) {
  let fuelValues = []
  const maxValue = (crabList.sort((a, b) => a-b))[crabList.length - 1]
  
  for(let i = 0; i <= maxValue; i++) {
    fuelValues.push(crabList.reduce((acc, curr) => {
      let fuelUnits = 0;
      let steps = Math.abs(curr - i);
      for(let i = 1; i <= steps; i++) {
        fuelUnits += i;
      }
      return acc + fuelUnits;
    }, 0))
  }

  console.log((fuelValues.sort((a, b) => a - b))[0])
}

const part = process.argv[2];
SolveProblem(part)