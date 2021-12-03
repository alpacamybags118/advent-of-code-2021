const helpers = require('../helpers/helpers');

function SolveProblem(part) {
  if(part == 1) {
    Part1();
  } else {
    Part2();
  }
}

function Part1() {
  console.log('part1');
}

function Part2() {
  console.log('part2');
}

const part = process.argv[2];
SolveProblem(part)