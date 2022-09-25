const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);

const solution = n => {
    if (n % 2) return (n + 1) * Math.floor(n / 2) + Math.ceil(n / 2);
    return (n + 1) * (n / 2);
};

const result = solution(n);
console.log(result);
