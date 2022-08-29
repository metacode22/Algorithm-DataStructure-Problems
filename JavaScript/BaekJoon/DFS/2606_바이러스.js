const fs = require('fs');
// let input = fs.readFileSync('input.txt').toString().trim();
let input = fs.readFileSync('/dev/stdin').toString().trim();
input = input.split('\n');

const computers = Number(input[0]);
const pairs = Number(input[1]);
input = input.slice(2);
const visited = new Array(computers + 1).fill(0);
const matrix = new Array();

for (let i = 0; i <= computers; i++) {
    matrix.push(new Array());
}

for (let i = 0; i < pairs; i++) {
    let current = input[i].split(' ').map(element => Number(element));
    
    matrix[current[0]].push(current[1]);
    matrix[current[1]].push(current[0]);
}

function solution(matrix, visited) {
    function DFS(x) {
        for (let value of matrix[x]) {
            if (visited[value] === 0) {
                visited[value] = 1;
                DFS(value);
            }
        }
    }
    
    DFS(1);
    
    return visited.reduce((acc, curr) => {return acc + curr})
}

let result = solution(matrix, visited) - 1;
console.log(result);
