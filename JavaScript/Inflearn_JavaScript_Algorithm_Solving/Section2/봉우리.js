const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const matrix = input.slice(1).map(justString => justString.split(' ').map(string => Number(string)));

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const solution = (matrix, N) => {
  let result = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const around = [];

      for (let k = 0; k < 4; k++) {
        const currentX = i + dx[k];
        const currentY = j + dy[k];
        if (0 <= currentX && currentX < N && 0 <= currentY && currentY < N) {
          around.push(matrix[currentX][currentY]);
        }
      }

      if (matrix[i][j] > Math.max(...around)) {
        result += 1;
      }
    }
  }

  return result;
};

const result = solution(matrix, N);
console.log(result);
