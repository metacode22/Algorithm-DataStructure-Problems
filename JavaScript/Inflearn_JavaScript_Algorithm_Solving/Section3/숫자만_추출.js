const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const inputArray = input[0].split('');

const solution = inputArray => {
  const onlyNumberArray = inputArray.filter(element => /[0-9]/.test(element));

  return parseInt(onlyNumberArray.join(''), 10);
};

const result = solution(inputArray);
console.log(result);
