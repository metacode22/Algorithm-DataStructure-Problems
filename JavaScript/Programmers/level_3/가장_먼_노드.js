// 2023-01-23
function solution(n, edge) {
  const distances = Array.from({ length: n }, (_, index) => {
    if (!index) return -1;
    return Infinity;
  });
  const visited = Array.from({ length: n }, (_, index) => {
    if (!index) return true;
    return false;
  });
  const graph = Array.from({ length: n }, () => new Array());

  edge.forEach(vertex => {
    const [source, destination] = vertex;
    graph[source - 1].push(destination - 1);
    graph[destination - 1].push(source - 1);
  });

  const queue = [[0, 0]];
  while (queue.length) {
    const [current, count] = queue.shift();

    graph[current].forEach(next => {
      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, count + 1]);

        if (count + 1 < distances[next]) {
          distances[next] = count + 1;
        }
      }
    });
  }

  const maxDistance = Math.max(...distances);
  return distances.filter(distance => distance === maxDistance).length;
}
