const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(stringArray => stringArray.split(' ').map(stringNumber => Number(stringNumber)));

const [N, M] = input[0];
const arrayLeft = input[1];
const arrayRight = input[2];
const solution = (arrayLeft, arrayRight) => {
  const result = [];
  let left = 0;
  let right = 0;

  while (left < arrayLeft.length && right < arrayRight.length) {
    if (arrayLeft[left] < arrayRight[right]) {
      result.push(arrayLeft[left]);
      left += 1;
    } else {
      result.push(arrayRight[right]);
      right += 1;
    }
  }

  while (left < arrayLeft.length) {
    result.push(arrayLeft[left]);
    left += 1;
  }

  while (right < arrayRight.length) {
    result.push(arrayRight[right]);
    right += 1;
  }

  return result.join(' ');
};

const result = solution(arrayLeft, arrayRight);
console.log(result);
