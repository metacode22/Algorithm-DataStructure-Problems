const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(element => Number(element));

function solution(input) {
  let newInput = [...input];
  const totalSum = newInput.reduce((prev, curr) => prev + curr);

  for (let i = 0; i <= newInput.length - 1; i++) {
    for (let j = i + 1; j <= newInput.length; j++) {
      const otherTwoSum = newInput[i] + newInput[j];

      if (totalSum - otherTwoSum === 100) {
        newInput = newInput.filter((value, index) => {
          if (index === i || index === j) {
            return false;
          }

          return true;
        });

        return newInput.sort((a, b) => a - b);
      }
    }
  }
}

const result = solution(input);
console.log(result.join('\n'));
