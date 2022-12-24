const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);
const scores = input[1].split(' ').map(string => Number(string));

const solution = scores => {
  const scoresLength = scores.length;
  const result = new Array(scores.length).fill(1);

  for (let i = 0; i < scoresLength; i++) {
    for (let j = 0; j < scoresLength; j++) {
      if (scores[j] > scores[i]) {
        result[i] += 1;
      }
    }
  }

  return result.join(' ');
};

const result = solution(scores);
console.log(result);
