const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const inputArray = input[0].split(' ').map(element => Number(element));

const solution = inputArray => {
  return Math.min(...inputArray);
};

const result = solution(inputArray);
console.log(result);
