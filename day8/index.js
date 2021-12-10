const helpers = require('../helpers/helpers');

const oneLetters = ['c', 'f']
const fourLetters = ['b', 'c', 'd', 'f']
const sevenLetters = ['a', 'c', 'f']
const eightLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

function SolveProblem(part) {
  if(part == 1) {
    Part1();
  } else {
    Part2();
  }
}

function Part1() {
  const input = helpers.getInputAsStringArrayByLineAndSpace('./day8/input.txt');
  GetInstancesOfUniqueDigits(input);
}

function Part2() {
  console.log('part2');
}

/**
 * 
 * @param {string[][]} input 
 */
function GetInstancesOfUniqueDigits(input) {
  let uniqueCount = 0;

  input.forEach((sequence) => {
    output = sequence.slice(sequence.indexOf('|') + 1)
    console.log(output);
    uniqueCount += output.reduce((acc, item) => {
        switch (item.length) {
          case oneLetters.length:
          case fourLetters.length:
          case sevenLetters.length:
          case eightLetters.length:
            return acc + 1;
          default:
            return acc;
        }
    }, 0);
  })


  console.log(uniqueCount); //387 too low
}

const part = process.argv[2];
SolveProblem(part)