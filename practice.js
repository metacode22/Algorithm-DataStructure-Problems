const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(stringArray => stringArray.split(' ').map(string => Number(string)));

const computerCount = Number(input[0][0]);
const virus = input.slice(2);

const graph = Array.from({ length: computerCount + 1 }, () => new Array());
virus.forEach(([src, dest]) => {
  graph[dest].push(src);
  graph[src].push(dest);
});

const solution = graph => {
  const visited = new Array(graph.length).fill(false);
  let count = 0;
  visited[1] = true;

  const DFS = current => {
    for (const next of graph[current]) {
      if (!visited[next]) {
        visited[next] = true;
        count += 1;
        DFS(next);
      }
    }
  };

  DFS(1);

  return count;
};

const result = solution(graph);
console.log(result);
