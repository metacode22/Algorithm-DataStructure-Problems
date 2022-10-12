const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(element => Number(element));

function solution(n, k) {
  const result = new Array();
  const queue = Array.from({ length: n }, (_, index) => index + 1);
  let currentTurnNumber = 0;

  while (queue.length > 0) {
    currentTurnNumber += 1;

    if (currentTurnNumber === k) {
      currentTurnNumber = 0;
      result.push(queue.shift());
      continue;
    }

    queue.push(queue.shift());
  }

  return result;
}

const result = solution(n, k);
console.log('<' + result.join(', ').trim() + '>');
