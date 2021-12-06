const helpers = require('../helpers/helpers');

function SolveProblem(part) {
  if(part == 1) {
    Part1();
  } else {
    Part2();
  }
}

function Part1() {
  const fullInput = helpers.getInputAsStringArray('./day4/input.txt');
  const bingoNumbers = fullInput[0].split(',').map((num) => parseInt(num));

  const boards = GetBingoBoards(fullInput);

  PlayBingo(boards, bingoNumbers);
}

function Part2() {
  const fullInput = helpers.getInputAsStringArray('./day4/input.txt');
  const bingoNumbers = fullInput[0].split(',').map((num) => parseInt(num));

  const boards = GetBingoBoards(fullInput);

  PlayBingo(boards, bingoNumbers, true);
}

/**
 * 
 * @param {string[]} input 
 * @returns {*} List of row and column combinations of each board
 */
function GetBingoBoards(input) {
  let boards = [];
  let index = 2;

  while(index < input.length) {
    let board = [];

    for(let i = index; i < index + 5; i++) {
      let row = input[i].trim().replace(/  +/g, ' ');
      board.push(GetRowCombination(row));
    }

    for(let i = 0; i < 5; i++) {
      board.push(GetColumnCombination(input, index, i));
    }

    boards.push(board);
    index = index + 6
  }

  return boards;
}

function GetRowCombination(row) {
  return row.split(' ').map((item) => {
    return {
      match: false,
      value: parseInt(item)
    }
  })
}

function GetColumnCombination(board, startingRow, columnIndex) {
  let column = [];
  for(let i = startingRow; i < startingRow + 5; i++) {
    let point = board[i].trim().replace(/  +/g, ' ').split(' ')[columnIndex];
    
    column.push({
      match: false,
      value: parseInt(point),
    })
  }

  return column
}

/**
 * 
 * @param {*} bingoBoards 
 * @param {number[]} numbers
 * @param {boolean} getLast
 */
function PlayBingo(bingoBoards, numbers, getLast = false) {
  let winningBoards = [];
  numbers.map((number, index) => {
    bingoBoards.forEach((board) => {
      board.forEach((item) => {
        item.forEach((ite) => {
          if (ite.value === number) {
            ite.match = true;
          } 
        })
      })
    });

    if(index > 4) {
      if(getLast) {
        const newWinningBoards = GetAllWinningBoards(bingoBoards);
        let diff = newWinningBoards.filter((board) => !winningBoards.includes(board));
        if(diff.length === 1 && newWinningBoards.length === bingoBoards.length) {
          const sum = SumWinningboard(bingoBoards[diff[0]]);

          console.log(sum * number);
        } else {
          winningBoards = newWinningBoards;
        }
      } else {
        const winningBoard = CheckForWinningBoard(bingoBoards)
        if(winningBoard !== null) {
          console.log(`found a winning board! ${winningBoard}`);
          const sum = SumWinningboard(bingoBoards[winningBoard]);

          console.log(sum * number);
        }
      }
    }
  })
}

/**
 * 
 * @param {*} bingoBoards 
 * @param {boolean} findLast
 * @returns {number} index of winning board
 */
function CheckForWinningBoard(bingoBoards) {
  let winningBoard = null;
  bingoBoards.forEach((board, index) => {
    let match;
      match = board.some((items) => {
        let matches = items.filter((item) => item.match === true);
  
        return matches.length === 5;
      });

    if(match) {
      winningBoard = index;
      return winningBoard;
    }
  });

  return winningBoard;
}

/**
 * 
 * @param {*} bingoBoards 
 * @param {boolean} findLast
 * @returns {number[]} index of winning board
 */
 function GetAllWinningBoards(bingoBoards) {
  let winningBoards = [];
  bingoBoards.forEach((board, index) => {
    let match;
      match = board.some((items) => {
        let matches = items.filter((item) => item.match === true);
  
        return matches.length === 5;
      });

    if(match) {
      winningBoards.push(index);
    }
  });

  return winningBoards;
}

function SumWinningboard(board) {
  let sum = 0;
  for(let i = 0; i < board.length / 2; i++) {
    board[i].forEach((item) => {
      if(item.match === false) {
        sum += item.value;
      }
    });
  }

  return sum;
}

const part = process.argv[2];
SolveProblem(part)