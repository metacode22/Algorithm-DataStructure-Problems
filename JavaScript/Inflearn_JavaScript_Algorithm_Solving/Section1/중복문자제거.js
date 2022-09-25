const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const word = input[0];

const solution = (word) => {
  const map = new Map();
  
  for (const string of word) {
    if (!map.get(string)) {
      map.set(string, true)
    }
  }
  
  return Array.from(map.keys()).join('');
}

const result = solution(word);
console.log(result);