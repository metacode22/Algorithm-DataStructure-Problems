const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0].split(' ')[0]);
const m = Number(input[0].split(' ')[1]);
const trees = input[1].split(' ').map(element => Number(element));

function check(currentHeight, newTrees) {
  let result = 0;

  newTrees.forEach(element => {
    if (element >= currentHeight) {
      result += element - currentHeight;
    }
  });

  return result;
}

function solution(n, m, trees) {
  const newTrees = [...trees];
  newTrees.sort((a, b) => a - b);

  let start = 0;
  let end = newTrees[newTrees.length - 1];
  let result = Number.MIN_SAFE_INTEGER;

  while (start <= end) {
    const mid = parseInt((start + end) / 2);

    if (check(mid, newTrees) >= m) {
      start = mid + 1;

      if (mid > result) {
        result = mid;
      }
    } else {
      end = mid - 1;
    }
  }

  return result;
}

const result = solution(n, m, trees);
console.log(result);
