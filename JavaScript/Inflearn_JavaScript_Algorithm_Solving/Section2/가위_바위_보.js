const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const a = input[1].split(' ').map(string => Number(string));
const b = input[2].split(' ').map(string => Number(string));

const solution = (a, b) => {
  const result = [];

  a.forEach((valueA, index) => {
    const valueB = b[index];

    if (valueA === valueB) result.push('D');
    else if ((valueA === 2 && valueB === 1) || (valueA === 3 && valueB === 2) || (valueA === 1 && valueB === 3))
      result.push('A');
    else result.push('B');
  });

  return result;
};

const result = solution(a, b);
result.forEach(value => {
  console.log(value);
});
