const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const inputString = Array.from(input[0]);
const bomb = input[1];

function solution(inputString, bomb) {
  const stack = new Array();
  const result = new Array();

  for (let i of inputString) {
    result.push(i);

    if (bomb.indexOf(i) !== -1) {
      stack.push(i);
    } else {
      for (let i = 0; i < bomb.length; i++) {
        stack.pop();
      }
    }

    if (stack.length >= bomb.length) {
      let temp = '';

      for (let i = bomb.length - 1; i >= 0; i--) {
        temp += stack[stack.length - 1 - i];
      }

      if (temp === bomb) {
        for (let i = 0; i < bomb.length; i++) {
          stack.pop();
          result.pop();
        }
      }
    }
  }

  if (result.length === 0) {
    console.log('FRULA');
  } else {
    console.log(result.join('').trim());
  }
}

solution(inputString, bomb);
