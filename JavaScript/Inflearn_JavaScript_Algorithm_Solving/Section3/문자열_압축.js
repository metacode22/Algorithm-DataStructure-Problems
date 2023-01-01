const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n')[0];

const solution = input => {
  const inputArray = input.split('');
  const result = [inputArray[0]];
  let left = 0;
  let right = 1;
  let count = 1;

  while (right < inputArray.length) {
    if (inputArray[left] === inputArray[right]) {
      count += 1;
      right += 1;
    } else {
      if (count !== 1) {
        result.push(count);
      }

      result.push(inputArray[right]);
      left = right;
      right += 1;
      count = 1;
    }
  }

  if (count !== 1) {
    result.push(count);
  }

  return result.join('');
};

const result = solution(input);
console.log(result);
