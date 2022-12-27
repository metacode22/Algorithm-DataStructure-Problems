const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const inputString = input[0];

const solution = inputString => {
  const inputArray = inputString.split('');
  const onlyAlphabets = inputArray.filter(string => /[a-zA-Z]/.test(string)).map(string => string.toLowerCase());

  let left = 0;
  let right = onlyAlphabets.length - 1;

  while (left < right) {
    if (onlyAlphabets[left] !== onlyAlphabets[right]) {
      return 'NO';
    }

    left += 1;
    right -= 1;
  }

  return 'YES';
};

const result = solution(inputString);
console.log(result);
