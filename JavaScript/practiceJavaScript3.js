function solution(N, mine, P) {
  const graph = Array.from({ length: N }, _ => new Array(N).fill(0));
  const visited = Array.from({ length: N }, _ => new Array(N).fill(0));
  const newMine = [...mine];
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  let count = 0;

  newMine.forEach(mine => {
    const [x, y] = mine;
    graph[x - 1][y - 1] = -1;
    for (let i = 0; i < 8; i++) {
      const nx = x - 1 + dx[i];
      const ny = y - 1 + dy[i];

      if (0 <= nx && nx < N && 0 <= ny && ny < N) {
        graph[nx][ny] += 1;
      }
    }
  });

  const [px, py] = P;
  const queue = new Array();
  queue.push([px - 1, py - 1]);
  visited[px - 1][py - 1] = 1;
  count += 1;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (0 <= nx && nx < N && 0 <= ny && ny < N) {
        if (graph[nx][ny] === 0 && visited[nx][ny] === 0) {
          visited[nx][ny] = 1;
          queue.push([nx, ny]);
          count += 1;
        }

        if (graph[nx][ny] > 0 && visited[nx][ny] === 0) {
          visited[nx][ny] = 1;
          count += 1;
        }
      }
    }
  }

  return count;
}
