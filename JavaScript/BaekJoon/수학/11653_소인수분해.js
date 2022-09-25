const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);

const solution = n => {
    const result = new Array();
    let divider = 2;

    while (n != 1) {
        if (n % divider === 0) {
            n /= divider;
            result.push(divider);
        } else {
            divider += 1;
        }
    }

    return result;
};

const result = solution(n);
console.log(...result);
