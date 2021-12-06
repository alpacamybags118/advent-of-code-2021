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
  console.log('part2');
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


// rewrite this to be easier to understand
/**
 * 
 * @param {string[][]} input 
 */
function CreateMap(input) {
  const ventMap = new Map();
  input.map((coordinateSet) => {
    const coords = coordinateSet.map((coord) => coord.split(',').map((num) => parseInt(num)));
    // if xs match
    if((coords[0][0] === coords[1][0])) {
      if(coords[0][1] > coords[1][1]) {
        for(let i = coords[0][1]; i >= coords[1][1]; i--) {
          if(ventMap.has(`${coords[0][0]},${i}`)) {
            ventMap.set(`${coords[0][0]},${i}`, ventMap.get(`${coords[0][0]},${i}`) + 1);
          } else {
            ventMap.set(`${coords[0][0]},${i}`, 1);
          }
        }
      } else {
        for(let i = coords[0][1]; i <= coords[1][1]; i++) {
          if(ventMap.has(`${coords[0][0]},${i}`)) {
            ventMap.set(`${coords[0][0]},${i}`, ventMap.get(`${coords[0][0]},${i}`) + 1);
          } else {
            ventMap.set(`${coords[0][0]},${i}`, 1);
          }
        }
      }
      // y's match
    } else if((coords[0][1] === coords[1][1])) {
      if(coords[0][0] > coords[1][0]) {
        for(let i = coords[0][0]; i >= coords[1][0]; i--) {
          if(ventMap.has(`${i},${coords[0][1]}`)) {
            ventMap.set(`${i},${coords[0][1]}`, ventMap.get(`${i},${coords[0][1]}`) + 1);
          } else {
            ventMap.set(`${i},${coords[0][1]}`, 1);
          }
        }
      } else {
        for(let i = coords[0][0]; i <= coords[1][0]; i++) {
          if(ventMap.has(`${i},${coords[0][1]}`)) {
            ventMap.set(`${i},${coords[0][1]}`, ventMap.get(`${i},${coords[0][1]}`) + 1);
          } else {
            ventMap.set(`${i},${coords[0][1]}`, 1);
          }
        }
      }
    }
    //diagonal 
    else if((coords[0][0] === coords[0][1]) && (coords[1][0] === coords[1][1])) {
      console.log(`diag ${coords[0]} ${coords[1]}`)
      if(coords[0][0] > coords[1][0]) {
        for(let i = coords[0][0]; i >= coords[1][0]; i--) {
          if(ventMap.has(`${i},${i}`)) {
            ventMap.set(`${i},${i}`, ventMap.get(`${i},${i}`) + 1);
          } else {
            ventMap.set(`${i},${i}`, 1);
          }
        }
      } else {
        for(let i = coords[0][0]; i <= coords[1][0]; i++) {
          if(ventMap.has(`${i},${i}`)) {
            ventMap.set(`${i},${i}`, ventMap.get(`${i},${i}`) + 1);
          } else {
            ventMap.set(`${i},${i}`, 1);
          }
        }
      }
    } else if((coords[0][0] === coords[1][1]) && (coords[0][1] === coords[1][0])) {
      console.log(`diag ${coords[0]} ${coords[1]}`)
      if(coords[0][0] > coords[1][0]) {
        for(let i = 0; i <= coords[0][0] - coords[1][0]; i++) {
          let newX = coords[0][0] - i;
          let newY = coords[0][1] + i;

          if(ventMap.has(`${newX},${newY}`)) {
            ventMap.set(`${newX},${newY}`, ventMap.get(`${newX},${newY}`) + 1);
          } else {
            ventMap.set(`${newX},${newY}`, 1);
          }
        }
      } else {
        for(let i = coords[1][0] - coords[0][0]; i >= 0; i--) {
          let newX = coords[0][0] + i;
          let newY = coords[0][1] - i;

          if(ventMap.has(`${newX},${newY}`)) {
            ventMap.set(`${newX},${newY}`, ventMap.get(`${newX},${newY}`) + 1);
          } else {
            ventMap.set(`${newX},${newY}`, 1);
          }
        }
      }
    } else {
        diff = Math.abs(coords[0][0] - coords[1][0])
        console.log(diff);
      for(let i = 0; i <= diff; i++) {
        let newX;
        let newY
        if(coords[0][0] > coords[1][0]) {
          newX = coords[0][0] - i;
        } else {
          newX = coords[0][0] + i;
        }

        if(coords[0][1] > coords[1][1]) {
          newY = coords[0][1] - i;
        } else {
          newY = coords[0][1] +i;
        }

        if(ventMap.has(`${newX},${newY}`)) {
          ventMap.set(`${newX},${newY}`, ventMap.get(`${newX},${newY}`) + 1);
        } else {
          ventMap.set(`${newX},${newY}`, 1);
        }
      }
    }
  })
  //console.log(ventMap)
  console.log(Array.from(ventMap.values()).filter((val) => val > 1).length) //part 2 - 13659 is too low
}

const part = process.argv[2];
SolveProblem(part)