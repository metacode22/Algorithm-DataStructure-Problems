const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const students = input[1].split(' ').map(string => Number(string));

const solution = (N, students) => {
  let count = 0;
  let currentHighStudent = -Infinity;

  students.forEach(value => {
    if (value > currentHighStudent) {
      currentHighStudent = value;
      count += 1
    }
  });
  
  return count;
};

const result = solution(N, students);
console.log(result);
