const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const k = Number(input[0]);
const numberArray = input.slice(1).map(element => Number(element));

function solution(k, numberArray) {
    const stack = new Array();

    numberArray.forEach(element => {
        if (element === 0 && stack.length !== 0) {
            stack.pop();

            return;
        }

        stack.push(element);
    });

    if (stack.length === 0) {
        return 0;
    }

    const result = stack.reduce((previous, current) => {
        return (previous += current);
    });

    return result;
}

const result = solution(k, numberArray);
console.log(result);
