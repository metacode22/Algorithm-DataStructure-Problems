const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const matrix = input.slice(1).map(justString => justString.split(' ').map(string => Number(string)));

const solution = matrix => {
  let rowMax = -Infinity;
  let colMax = -Infinity;

  let crossForward = 0;
  let crossReverse = 0;

  for (let i = 0; i < matrix.length; i++) {
    let rowCurrent = 0;
    let colCurrent = 0;

    crossForward += matrix[i][i];
    crossReverse += matrix[i][matrix.length - i - 1]
    for (let j = 0; j < matrix.length; j++) {
      rowCurrent += matrix[i][j];
      colCurrent += matrix[j][j];
    }

    if (rowCurrent > rowMax) rowMax = rowCurrent;
    if (colCurrent > colMax) colMax = colCurrent;
  }

  return Math.max(rowMax, colMax, crossForward, crossReverse);
};

const result = solution(matrix);
console.log(result);
