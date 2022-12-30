const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [longText, target] = input[0].split(' ');

const solution = (longText, target) => {
  const longTextArray = longText.split('');
  const results = [];

  longTextArray.forEach((text, index) => {
    let left = index;
    let right = index;
    let result;

    while (left >= 0 || right < longTextArray.length) {
      if (longTextArray[left] && longTextArray[left] === target) {
        result = Math.abs(index - left);
        break;
      }

      if (longTextArray[right] && longTextArray[right] === target) {
        result = Math.abs(index - right);
        break;
      }

      left -= 1;
      right += 1;
    }

    results.push(result);
  });

  return results.join(' ');
};

const result = solution(longText, target);
console.log(result);
