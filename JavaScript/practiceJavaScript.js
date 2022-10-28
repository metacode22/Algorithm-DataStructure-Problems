const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [row, col] = input[0].split(' ').map(string => Number(string));
const graph = input.slice(1).map(element => element.split(' ').map(string => Number(string)));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const solution = (graph, row, col) => {
  const visited = Array.from({ length: row }, (_, rowIndex) =>
    Array.from({ length: col }, (_, colIndex) => {
      if (!rowIndex || rowIndex === row - 1) return true;
      if (!colIndex || colIndex === col - 1) return true;
      return false;
    }),
  );
  const totalTime = 0;
  let lastCheese = 0;

  const queue = [];
  queue.push([1, 1]);
  
  while (queue.length > 0) {
    const [cx, cy] = queue.shift();
    
    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];
      
      if ((0 < nx && nx < row - 1) && (0 < ny && ny < col - 1)) {
        
      }
    }
  }
};

solution(graph, row, col);

// const [totalTime, lastCheese] = solution(graph, row, col);
