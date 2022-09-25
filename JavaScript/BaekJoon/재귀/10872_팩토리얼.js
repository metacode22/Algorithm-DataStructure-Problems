const fs = require('fs');
// let input = fs.readFileSync('input.txt').toString()
let input = fs.readFileSync('/dev/stdin').toString();

let inputNumber = Number(input);
function solution(num) {
    if (num === 0) {
        return 1;
    }

    return num * solution(num - 1);
}

result = solution(inputNumber);
console.log(result);
