const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const inputString = input[0];

const solution = () => {
  return inputString.toUpperCase();
}

const result = solution(inputString);
console.log(result);
