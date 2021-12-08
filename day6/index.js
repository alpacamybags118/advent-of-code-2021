const helpers = require('../helpers/helpers');

function SolveProblem(part) {
  if(part == 1) {
    Part1();
  } else {
    Part2();
  }
}

function Part1() {
  const input = helpers.getInputAsNumberArray('./day6/input.txt', ',');
  RunSimulation(input, 80)
}

function Part2() {
  const input = helpers.getInputAsNumberArray('./day6/input.txt', ',');
  RunSimulation(input, 256)
}

/**
 * 
 * @param {number[]} startingState the starting state of the fish school
 * @param {number} days number of days to run simulation
 * 
 * The algorithm: we initialize a map that repesents the number of fish at each state.
 * Based on the rules, each day state goes down 1 so we shift the map downward 1.
 * if a fish is at 0 before the shift, that represents how many new fish will be created that day (e.g 2 0's = 2 new fish)
 * the existing fish shifts to 6, so we need to add it to the state of fish at 7 before the shift since 7 wll become 6 at the shift
 * then the new fish is set to a timer of 8, so it becomes that value that 0 was before the shift, since it represents the new fish
 */
function RunSimulation(startingState, days) {
  const stateMap = new Map();

  for(let i = 0; i < 9; i++) {
    stateMap.set(i, 0);
  }

  startingState.forEach((timer) => {
    stateMap.set(timer, stateMap.get(timer) === undefined ? 1 : stateMap.get(timer) + 1);
  });
  for(let day = 0; day < days; day++) {
    let temp = stateMap.get(0);

    for(let i = 0; i <= 8;i++) {
      if(i === 6) {
        stateMap.set(6, temp + stateMap.get(7));
      } else if(i === 8) {
        stateMap.set(8, temp)
      } else {
        stateMap.set(i, stateMap.get(i + 1));
      }
    }
    //console.log(stateMap);
  }

  console.log(Array.from(stateMap.values()).reduce((prev, curr) => prev + curr));
}

const part = process.argv[2];
SolveProblem(part)

/*
      5 days
      start - 3 (double after n+1 days) 9w days to double again. exponential 3^1 +
      day 1: 2
      day 2: 1
      day 3: 0
      day 4: 6 8
      day 5: 5 7
      day 6: 4 6
      day 7: 3 5
      day 8: 2 4
      day 9: 1 3
      day 10: 0 2
      day 11: 6 8 1
      day 12: 5 7 0
      day 13: 4 6 6 8
    */