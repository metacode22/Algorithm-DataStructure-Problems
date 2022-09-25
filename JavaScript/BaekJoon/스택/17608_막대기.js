const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const sticks = input.slice(1).map(height => Number(height));

const solution = (n, sticks) => {
  const stack = new Array();
  const newSticks = [...sticks];
  
  newSticks.reverse().forEach((height) => {
    if (stack.length === 0) {
      stack.push(height);
      return;
    }
    
    if (height > stack[stack.length - 1]) {
      stack.push(height);
    }
  })
  
  return stack.length;
};

const result = solution(n, sticks);
console.log(result);