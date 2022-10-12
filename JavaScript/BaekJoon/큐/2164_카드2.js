const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);

function solution(n) {
  const numberArray = Array.from({ length: n }, (v, i) => i + 1);

  while (numberArray.length > 1) {
    numberArray.shift();

    const temp = numberArray.shift();

    numberArray.push(temp);
  }

  return numberArray[0];
}

const result = solution(n);
console.log(result);
