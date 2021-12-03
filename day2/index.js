const helpers = require('../helpers/helpers');

function SolveProblem(part) {
  if(part == 1) {
    Part1();
  } else {
    Part2();
  }
}

function Part1() {
  const input = helpers.getInputAsStringArray('./day2/input.txt');
  Navigate(input);
}

function Part2() {
  const input = helpers.getInputAsStringArray('./day2/input.txt');
  NavigateWithAim(input);
}

function Navigate(instructions) {
  let depth = 0;
  let position = 0;

  instructions.forEach((instruction) => {
    const splitInstruction = instruction.split(' ');

    switch(splitInstruction[0]) {
      case 'forward':
        position += parseInt(splitInstruction[1])
        break;
      case 'up':
        depth -= parseInt(splitInstruction[1]);
        break;
      case 'down':
        depth += parseInt(splitInstruction[1]);
        break;
    }
  });

  console.log(depth);
  console.log(position);

  console.log(depth * position);
}

function NavigateWithAim(instructions) {
  let depth = 0;
  let position = 0;
  let aim = 0;

  instructions.forEach((instruction) => {
    const splitInstruction = instruction.split(' ');

    switch(splitInstruction[0]) {
      case 'forward':
        const distance = parseInt(splitInstruction[1])
        position += distance;
        depth += aim * distance;
        break;
      case 'up':
        aim -= parseInt(splitInstruction[1]);
        break;
      case 'down':
        aim += parseInt(splitInstruction[1]);
        break;
    }
  });

  console.log(depth);
  console.log(position);

  console.log(depth * position);
}

const part = process.argv[2];
SolveProblem(part)