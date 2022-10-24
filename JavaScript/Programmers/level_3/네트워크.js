function solution(n, computers) {
  let count = 0;
  const visited = new Array(n).fill(false);
  const graph = Array.from({ length: n }, () => []);
  const _DFS = current => {
    for (const next of graph[current]) {
      if (!visited[next]) {
        visited[next] = true;
        _DFS(next);
      }
    }
  };

  computers.forEach((computer, source) => {
    computer.forEach((isConnected, destination) => {
      if (isConnected && source !== destination) graph[source].push(destination);
    });
  });

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count += 1;
      _DFS(i);
    }
  }

  return count;
}
