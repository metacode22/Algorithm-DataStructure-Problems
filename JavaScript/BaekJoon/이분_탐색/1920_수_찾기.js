const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const arrayN = input[1].split(' ').map(element => Number(element));
const m = Number(input[2]);
const arrayM = input[3].split(' ').map(element => Number(element));

function isValid(newArrayN, target) {
    let left = 0;
    let right = newArrayN.length - 1;

    while (left <= right) {
        const mid = parseInt((left + right) / 2);
        if (newArrayN[mid] === target) {
            return 1;
        } else if (newArrayN[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return 0;
}

function solution(arrayN, arrayM) {
    const newArrayN = [...arrayN].sort((a, b) => a - b);
    let result = new Array();

    arrayM.forEach(element => {
        result.push(isValid(newArrayN, element));
    });

    return result;
}

const result = solution(arrayN, arrayM);

// 왜 forEach가 아니라 join으로 해야 시간 초과가 나지 않을까?
console.log(result.join('\n'));
// result.forEach((element) => {
//     console.log(element);
// })
