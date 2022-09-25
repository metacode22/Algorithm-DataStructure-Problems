const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const word = input[0];
const specialAlphabet = input[1];

const solution = (word, specialAlphabet) => {
  let count = 0;
  
  for (const alphabet of word) {
    if (alphabet === specialAlphabet) count++;
  }
  
  return count;
}

const result = solution(word, specialAlphabet);
console.log(result);