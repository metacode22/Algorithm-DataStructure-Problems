const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const numberArray = input[1].split(' ').map(string => Number(string));

const solution = (N, numberArray) => {
  const result = [numberArray[0]];

  for (let i = 1; i < N; i++) {
    if (numberArray[i] > numberArray[i - 1]) result.push(numberArray[i]);
  }

  return result.join(' ');
};

const result = solution(N, numberArray);
console.log(result);
