const fs = require('fs');
// let input = fs.readFileSync('input.txt').toString().trim().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const arrayN = input[1].split(' ').map(element => Number(element));
const m = Number(input[2]);
const arrayM = input[3].split(' ').map(element => Number(element));
arrayN.sort((a, b) => a - b);

function binarySearch(arrayN, target) {
    let leftIndex = 0;
    let rightIndex = arrayN.length - 1;

    while (leftIndex <= rightIndex) {
        const mid = parseInt((leftIndex + rightIndex) / 2);

        if (arrayN[mid] === target) {
            return '1';
        } else if (arrayN[mid] > target) {
            rightIndex = mid - 1;
        } else {
            leftIndex = mid + 1;
        }
    }

    return '0';
}

function solution(n, arrayN, m, arrayM) {
    let result = '';

    for (let i = 0; i < m; i++) {
        result += binarySearch(arrayN, arrayM[i]) + ' ';
    }

    console.log(result.trim());
}

solution(n, arrayN, m, arrayM);
