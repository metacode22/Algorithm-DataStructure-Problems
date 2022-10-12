const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const graph = input.slice(1).map(element => element.split(' ').map(element => Number(element)));
let whiteCount = 0;
let blueCount = 0;

const sum = (xStart, xEnd, yStart, yEnd, newGraph) => {
  let count = 0;
  let forCount = 0;

  for (let i = xStart; i <= xEnd; i++) {
    for (let j = yStart; j <= yEnd; j++) {
      count += newGraph[i][j];
      forCount += 1;
    }
  }

  if (count === 0) {
    return 'white';
  }

  if (count === forCount) {
    return 'blue';
  }
};

// x: row, y: col
const DFS = (level, xStart, xEnd, yStart, yEnd, newGraph) => {
  if (sum(xStart, xEnd, yStart, yEnd, newGraph) === 'white') {
    whiteCount += 1;
    return;
  }

  if (sum(xStart, xEnd, yStart, yEnd, newGraph) === 'blue') {
    blueCount += 1;
    return;
  }

  DFS(level + 1, xStart, parseInt((xStart + xEnd) / 2), yStart, parseInt((yStart + yEnd) / 2), newGraph);
  DFS(level + 1, xStart, parseInt((xStart + xEnd) / 2), parseInt((yStart + yEnd) / 2) + 1, yEnd, newGraph);
  DFS(level + 1, parseInt((xStart + xEnd) / 2) + 1, xEnd, yStart, parseInt((yStart + yEnd) / 2), newGraph);
  DFS(level + 1, parseInt((xStart + xEnd) / 2) + 1, xEnd, parseInt((yStart + yEnd) / 2) + 1, yEnd, newGraph);
};

const solution = (n, graph) => {
  const newGraph = [...graph];

  DFS(1, 0, n - 1, 0, n - 1, newGraph);
};

solution(n, graph);
console.log(whiteCount);
console.log(blueCount);
