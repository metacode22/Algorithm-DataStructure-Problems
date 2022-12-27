const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const word = input[0];

const solution = word => {
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left].toLowerCase() !== word[right].toLowerCase()) {
      return 'NO';
    }

    left += 1;
    right -= 1;
  }

  return 'YES';
};

const result = solution(word);
console.log(result);
