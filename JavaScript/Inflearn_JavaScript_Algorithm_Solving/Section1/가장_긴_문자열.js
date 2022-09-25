const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const words = input.slice(1);

const solution = (n, words) => {
  let longestWord = words[0];
  
  for (const word of words) {
    if (word.length > longestWord.length) longestWord = word;
  }
  
  return longestWord;
}

const result = solution(n, words);
console.log(result);