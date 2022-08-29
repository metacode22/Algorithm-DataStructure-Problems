function DFS(i, n, computers, visited) {
    for (let j = 0; j < n; j++) {
        if (computers[i][j] === 1 && visited[j] === 0) {
            visited[j] = 1;
            DFS(j, n, computers, visited);
        }   
    }
}

function solution(n, computers) {
    const visited = new Array(n).fill(0);
    let count = 0;
    
    for (let i = 0; i < n; i++) {
        if (visited[i] === 0) {
            count += 1;
            visited[i] = 1;
            DFS(i, n, computers, visited);
        }
    }
    
    return count;
}