const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(element => Number(element));
const graph = input.slice(1).map(element => element.split('').map(element => Number(element)));

function solution(n, m, graph) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const newGraph = [...graph];

  const queue = new Array();
  queue.push([0, 0, 1]);
  newGraph[0][0] = 1;

  while (queue.length !== 0) {
    const count = queue[0][2];
    const [cx, cy] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (0 <= nx && nx <= n - 1 && 0 <= ny && ny <= m - 1 && newGraph[nx][ny] === 1) {
        newGraph[nx][ny] = 0;

        if (nx === n - 1 && ny === m - 1) {
          return count + 1;
        }

        queue.push([nx, ny, count + 1]);
      }
    }
  }
}

const result = solution(n, m, graph);
console.log(result);
