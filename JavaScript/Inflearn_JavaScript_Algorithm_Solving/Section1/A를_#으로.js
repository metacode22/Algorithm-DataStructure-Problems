const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const word = input[0];

const solution = word => {
  return word.replaceAll('A', '#');
};

const result = solution(word);
console.log(result);
