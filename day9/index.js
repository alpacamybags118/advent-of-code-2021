const helpers = require('../helpers/helpers');

function SolveProblem(part) {
  if(part == 1) {
    Part1();
  } else {
    Part2();
  }
}

function Part1() {
  const input = helpers.getNumberGraph('./day9/input.txt');
  const lowPoints = FindLowPoints(input);

  console.log(lowPoints.reduce((acc, item) => acc + (item + 1), 0));
}

function Part2() {
  console.log('part2');
}

/**
 * 
 * @param {number[][]} input 
 * @returns {number[]} lowPoints
 */
function FindLowPoints(input) {
  let lowPoints = [];
  input.forEach((row, rowIndex) => {
    row.forEach((cell, cellIndex) => {
      let rowAdjacent;
      let columnAdjacent;
      const topRow = rowIndex === 0;
      const bottomRow = rowIndex === input.length - 1;
      const leftColumn = cellIndex === 0;
      const rightColumn = cellIndex === row.length - 1;

      console.log(`working on cell: ${cell}`);
      if(leftColumn) {
        console.log(`cell to the right: ${row[cellIndex + 1]}`)
        rowAdjacent = row[cellIndex + 1] > cell;
      } else if(rightColumn) {
        console.log(`cell to the left: ${row[cellIndex - 1]}`)
        rowAdjacent = row[cellIndex - 1] > cell;
      } else {
        console.log(`cell to the right: ${row[cellIndex + 1]}`)
        console.log(`cell to the left: ${row[cellIndex - 1]}`)
        rowAdjacent = row[cellIndex + 1] > cell && row[cellIndex - 1] > cell
      }

      if(topRow) {
        console.log(`cell below: ${input[rowIndex+1][cellIndex]}`)
        columnAdjacent = input[rowIndex+1][cellIndex] > cell
      } else if(bottomRow) {
        console.log(`cell above: ${input[rowIndex-1][cellIndex]}`)

        columnAdjacent = input[rowIndex-1][cellIndex] > cell
      } else {
        console.log(`cell below: ${input[rowIndex+1][cellIndex]}`)
        console.log(`cell above: ${input[rowIndex-1][cellIndex]}`)

        columnAdjacent = input[rowIndex+1][cellIndex] > cell && input[rowIndex-1][cellIndex] > cell
      }

      if(rowAdjacent && columnAdjacent) {
        console.log(`adding cell to list`)
        lowPoints.push(cell);
      }

      console.log();
    })
  });

  console.log(lowPoints)

  return lowPoints;
}

const part = process.argv[2];
SolveProblem(part)