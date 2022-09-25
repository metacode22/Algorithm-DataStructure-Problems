const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const DOZEN = 12;

const solution = n => {
    return Math.ceil(n / DOZEN);
};

const result = solution(n);
console.log(result);
