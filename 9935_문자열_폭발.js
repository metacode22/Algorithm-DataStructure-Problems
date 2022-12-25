const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const target = input[0];
const bomb = input[1];

const solution = (target, bomb) => {
  const stack = [];
  const bombLength = bomb.length;

  for (const element of target) {
    stack.push(element);

    if (stack.length >= bombLength) {
      const start = stack.length - bombLength;
      if (stack.slice(start).join('') === bomb) {
        for (let i = 0; i < bombLength; i++) {
          stack.pop();
        }
      }
    }
  }

  return stack.length ? stack.join('') : 'FRULA';
};

const result = solution(target, bomb);
console.log(result);
