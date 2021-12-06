const helpers = require('../helpers/helpers');

function SolveProblem(part) {
  if(part == 1) {
    Part1();
  } else {
    Part2();
  }
}

function Part1() {
  const input = helpers.getInputAsStringArray('day5/input.txt');
  const formattedInput = FormatInput(input);

  CreateMap(formattedInput);
}

function Part2() {
  const input = helpers.getInputAsStringArray('day5/input.txt');
  const formattedInput = FormatInput(input);

  CreateMap(formattedInput, false);
}

/**
 * 
 * @param {string[]} input
 * @returns {string[][]} 
 */
function FormatInput(input) {
  let sanitized = input.map((item) => item.replace(' -> ', ' '));
  sanitized = sanitized.map((item) => item.split(' '));

 return sanitized
}


/**
 * 
 * @param {string[][]} input 
 * @param {boolean} skipDiagonals
 */
function CreateMap(input, skipDiagonals = true) {
  const ventMap = new Map();

  input.forEach((coordinateSet) => {
    const coords = coordinateSet.map((coord) => coord.split(',').map((num) => parseInt(num)));
      // skip diag for part 1
      if(skipDiagonals) {
        if((coords[0][0] !== coords[1][0]) && (coords[0][1] !== coords[1][1])) {
          return
        }
      }

      if(coords[0][0] === coords[1][0]) {
        diff = Math.abs(coords[0][1] - coords[1][1])
      } else {
        diff = Math.abs(coords[0][0] - coords[1][0])
      }

      for(let i = 0; i <= diff; i++) {
        let newX;
        let newY;

        if(coords[0][0] > coords[1][0]) {
          newX = coords[0][0] - i;
        } else if (coords[0][0] < coords[1][0]) {
          newX = coords[0][0] + i;
        } else {
          newX = coords[0][0]
        }

        if(coords[0][1] > coords[1][1]) {
          newY = coords[0][1] - i;
        } else if (coords[0][1] < coords[1][1]) {
          newY = coords[0][1] +i;
        } else {
          newY = coords[0][1] 
        }

        if(ventMap.has(`${newX},${newY}`)) {
          ventMap.set(`${newX},${newY}`, ventMap.get(`${newX},${newY}`) + 1);
        } else {
          ventMap.set(`${newX},${newY}`, 1);
        }
      }
  })
  

  console.log(Array.from(ventMap.values()).filter((val) => val > 1).length)
}

const part = process.argv[2];
SolveProblem(part)