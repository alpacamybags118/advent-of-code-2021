const helpers = require('../helpers/helpers')

function SolveProblem(part) {
  if(part == 1) {
    Part1();
  } else {
    Part2();
  }
}

function Part1() {
  const numOfIncrease = getNumberOfDepthIncreases();
  console.log(numOfIncrease);
}

function Part2() {
  const threePointIncrease = getNumberOfDepthIncreases(getThreePointSlidingMeasurements(helpers.getInputAsNumberArray('./day1/input.txt')));
  console.log(threePointIncrease);
}

function getInputAsNumberArray() {
  return fs.readFileSync('./day1/input.txt', {encoding: 'utf-8'}).split('\n').map((item) => parseInt(item));
}

function getNumberOfDepthIncreases(depthList) {
  return depthList.filter((curr, index) => index != 0 && curr > depthList[index - 1]).length
}

function getThreePointSlidingMeasurements(depthList) {
  return depthList.map((item, index) => {
    if(index >= item.length - 2) {
      return null
    }

    return item + depthList[index + 1] + depthList[index + 2];
  })
}

const part = process.argv[2];
SolveProblem(part);
