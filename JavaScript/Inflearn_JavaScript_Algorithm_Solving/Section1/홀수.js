const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const inputArray = input[0].split(' ').map(element => Number(element));

const solution = inputArray => {
  const oddArray = inputArray.filter(number => number % 2);
  const sumResult = oddArray.reduce((acc, curr) => acc + curr, 0);

  let minResult = oddArray[0];
  oddArray.forEach(number => (number < minResult ? (minResult = number) : null));

  return [sumResult, minResult];
};

const [sumResult, minResult] = solution(inputArray);
console.log(sumResult);
console.log(minResult);
