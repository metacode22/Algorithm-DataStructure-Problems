const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].split(' ').map(element => Number(element));
let maxValue = -1;

function check(current) {
  let result = 0;

  for (let i = 0; i < current.length - 1; i++) {
    result += Math.abs(current[i] - current[i + 1]);
  }

  if (result >= maxValue) {
    maxValue = result;
  }
}

function DFS(level, current, n, newNums, visited) {
  if (level === n) {
    check(current);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      visited[i] = 1;
      DFS(level + 1, [...current, newNums[i]], n, newNums, visited);
      visited[i] = 0;
    }
  }
}

function solution(n, nums) {
  const visited = new Array(n).fill(0);
  const newNums = [...nums];

  DFS(0, new Array(), n, newNums, visited);
}

solution(n, nums);
console.log(maxValue);
