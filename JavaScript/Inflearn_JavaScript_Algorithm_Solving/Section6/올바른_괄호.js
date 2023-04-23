const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('');

const solution = brackets => {
  const stack = [];
  let result = 'YES';

  brackets.forEach(bracket => {
    if (bracket === '(') stack.push(bracket);
    else {
      if (stack[stack.length - 1] === '(') stack.pop();
      else result = 'NO';
    }
  });

  if (stack.length) result = 'NO';

  return result;
};

const result = solution(input);
console.log(result);
