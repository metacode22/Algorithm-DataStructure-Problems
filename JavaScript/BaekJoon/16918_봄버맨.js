const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const EMPTY = '.';
const BOMB = 'O';
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const [R, C, N] = input[0].split(' ').map(string => Number(string));
let graph = input.slice(1).map(string =>
  string.split('').map(value => {
    if (value !== EMPTY) return 1;
    return EMPTY;
  }),
);

const solution = N => {
  let currentTime = 1;

  while (currentTime < N) {
    let temp = [];
    currentTime += 1;

    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (graph[i][j] !== EMPTY && graph[i][j] <= 3) {
          graph[i][j] += 1;
        }

        if (currentTime % 2 === 0) {
          if (graph[i][j] === EMPTY) {
            graph[i][j] = 0;
          }
        } else {
          if (graph[i][j] >= 3) {
            temp.push([i, j]);
          }
        }
      }
    }

    while (temp.length) {
      const [cx, cy] = temp.pop();
      graph[cx][cy] = EMPTY;

      for (let k = 0; k < 4; k++) {
        const nx = cx + dx[k];
        const ny = cy + dy[k];

        if (0 <= nx && nx < R && 0 <= ny && ny < C) {
          graph[nx][ny] = EMPTY;
        }
      }
    }

    temp = [];
  }

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (graph[i][j] !== EMPTY) {
        graph[i][j] = BOMB;
      }
    }
  }

  graph = graph.map(value => value.join('')).join('\n');
};

solution(N);
console.log(graph);
