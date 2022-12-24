const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const isCorrects = input[1].split(' ').map(string => Number(string));

const solution = isCorrects => {
  let result = 0;
  let current = 1;

  isCorrects.forEach(isCorrect => {
    if (isCorrect) {
      result += current;
      current += 1;
    } else {
      current = 1;
    }
  });

  return result;
};

const result = solution(isCorrects);
console.log(result);
