const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const t = Number(input[0]);

const solution = t => {
  const abc = [300, 60, 10];
  const count = new Array(abc.length).fill(0);
  let index = 0;

  while (index < abc.length) {
    count[index] = parseInt(t / abc[index]);
    t %= abc[index];
    index += 1;
  }

  if (t !== 0) return [-1];

  return count;
};

const result = solution(t);
console.log(...result);
