const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const inputString = input[0];

const solution = inputString => {
    let count = 0;

    for (const string of inputString) {
        string === string.toUpperCase() ? count++ : null;
    }

    return count;
};

const result = solution(inputString);
console.log(result);
