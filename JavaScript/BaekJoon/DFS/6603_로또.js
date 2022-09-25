const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')
	.map((element) => element.split(' ').map((string) => Number(string)));

function DFS(level, index, newArray, visited, current) {
  if (newArray === [0]) {
    return;
  }
  
  if (level === 6) {
    console.log(...current);
    return;
  }
  
  for (let i = index; i < newArray.length; i++) {
    if (visited[i] === 0) {
      visited[i] = 1;
      DFS(level + 1, i + 1, newArray, visited, [...current, newArray[i]]);
      visited[i] = 0;
    }
  }
}
  
function solution(input) {
  const newInput = [...input];
  
  for (const array of newInput) {
    const k = array[0];
    const newArray = array.slice(1);
    const visited = new Array(newArray.length).fill(0);
    DFS(0, 0, newArray, visited, new Array())
    console.log();
  }
}

solution(input);