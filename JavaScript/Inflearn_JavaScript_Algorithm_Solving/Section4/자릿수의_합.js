const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const numberArray = input[1].split(' ').map(string => Number(string));

const solution = numberArray => {
  let result;
  const newNumberArray = numberArray.map((number, index) => {
    let temp = number;
    let sum = 0;

    while (temp > 0) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    return [sum, number, index];
  });

  newNumberArray.forEach((value, index) => {
    if (index === 0) {
      result = value;
      return;
    }

    if (value[0] >= result[0] && value[1] > result[1]) {
      result = value;
    }
  });

  return result[1];
};

const result = solution(numberArray);
console.log(result);
