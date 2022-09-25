const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(element => Number(element));
const graph = input.slice(1).map(element => element.split(''));
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function BFS(n, m, i, j, newGraph, color) {
    let result = 0;
    const queue = new Array();
    queue.push([i, j]);
    newGraph[i][j] = 'Dummy';

    while (queue.length > 0) {
        const [cx, cy] = queue.shift();
        result += 1;

        for (let i = 0; i < 4; i++) {
            const nx = cx + dx[i];
            const ny = cy + dy[i];

            if (0 <= nx && nx < m && 0 <= ny && ny < n && newGraph[nx][ny] === color) {
                newGraph[nx][ny] = 'Dummy';
                queue.push([nx, ny]);
            }
        }
    }

    return result;
}

function solution(n, m, graph) {
    const newGraph = [...graph];
    let whiteResult = 0;
    let blueResult = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (newGraph[i][j] === 'W') {
                const result = BFS(n, m, i, j, newGraph, 'W');
                whiteResult += result * result;
            }

            if (newGraph[i][j] === 'B') {
                const result = BFS(n, m, i, j, newGraph, 'B');
                blueResult += result * result;
            }
        }
    }

    return [whiteResult, blueResult];
}

const result = solution(n, m, graph);
console.log(...result);
