const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map(string => string.split(' '));

const N = Number(input[0]);
const M = Number(input[2]);
const array1 = input[1].map(string => Number(string));
const array2 = input[3].map(string => Number(string));

// 2023-04-22
const solution = (N, M, array1, array2) => {
  const result = [];
  let left = 0;
  let right = 0;

  while (left < N && right < M) {
    if (array1[left] < array2[right]) {
      result.push(array1[left]);
      left += 1;
    } else {
      result.push(array2[right]);
      right += 1;
    }
  }

  if (left < N) {
    while (left < N) {
      result.push(array1[left]);
      left += 1;
    }
  }

  if (right < M) {
    while (right < M) {
      result.push(array2[right]);
      right += 1;
    }
  }

  return result.join(' ');
};

const result = solution(N, M, array1, array2);
console.log(result.length);
