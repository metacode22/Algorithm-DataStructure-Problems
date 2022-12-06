const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const inputArray = input.filter((element, index) => index > 0).map(element => Number(element));
/**
 *
 * @param {number} n
 * @param {string} inputArray
 * @returns
 */
function solution(n, inputArray) {
  let newInputArray = [...inputArray].sort((a, b) => a - b);

  return newInputArray;
}

const result = solution(n, inputArray);
result.forEach(element => console.log(element));
