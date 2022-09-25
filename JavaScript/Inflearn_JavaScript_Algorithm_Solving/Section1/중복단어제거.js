const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const words = input.slice(1);

const solution = words => {
  const newWords = [...words];
  const map = new Map();

  newWords.forEach(word => {
    map.set(word, true);
  });
  
  let result = '';
  
  map.forEach((_, key) => {
    result += `${key}\n`;
  })
  
  return result.slice(0, result.length - 1);
};

const result = solution(words);
console.log(result);
