const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const findNumbers = input[1].split(' ').map(string => Number(string));
const m = Number(input[2]);
const numbers = input[3].split(' ').map(string => Number(string));

const solution = (findNumbers, numbers) => {
  const sortedFindNumbers = [...findNumbers].sort((a, b) => a - b);
  const result = new Array(numbers.length).fill(0);

  numbers.forEach((number, index) => {
    let left = 0;
    let right = sortedFindNumbers.length - 1;

    while (left <= right) {
      const mid = parseInt((left + right) / 2);

      if (sortedFindNumbers[mid] === number) {
        result[index] = 1;
        return;
      } else if (sortedFindNumbers[mid] > number) {
        right = mid - 1;
      } else if (sortedFindNumbers[mid] < number) {
        left = mid + 1;
      }
    }

    result[index] = 0;
  });

  return result.join(' ');
};

const result = solution(findNumbers, numbers);
console.log(result);
