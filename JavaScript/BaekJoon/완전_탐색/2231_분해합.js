const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim();
input = Number(input);
// let result = Number.MAX_SAFE_INTEGER;

function check(currentNumber, target) {
  currentNumber = Array.from(String(currentNumber));
  let sum = Number(currentNumber.join(''));

  for (let i = 0; i < currentNumber.length; i++) {
    sum += Number(currentNumber[i]);
  }

  if (sum === target) {
    return true;
  } else {
    return false;
  }
}

function solution(input) {
  let result = 0;

  for (let i = 1; i < input; i++) {
    if (check(i, input) === true) {
      result = i;
      break;
    }
  }

  console.log(result);
}

solution(input);
