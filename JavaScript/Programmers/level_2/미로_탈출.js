const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function solution(maps) {
  const rowLength = maps.length;
  const colLength = maps[0].length;
  const graph = maps.map(string => string.split(''));
  let visited = Array.from({ length: rowLength }, () => new Array(colLength).fill(false));
  let isLeverPulled = false;
  let startX = 0;
  let startY = 0;

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      if (graph[i][j] === 'S') {
        startX = i;
        startY = j;
        break;
      }
    }
  }

  visited[startX][startY] = true;
  let queue = [[startX, startY, 0]];
  while (queue.length) {
    const [currentX, currentY, currentTime] = queue.shift();

    if (isLeverPulled && graph[currentX][currentY] === 'E') {
      return currentTime;
    }

    if (graph[currentX][currentY] === 'L') {
      isLeverPulled = true;
      visited = Array.from({ length: rowLength }, () => new Array(colLength).fill(false));
      queue = [];
      visited[currentX][currentY] = true;
    }

    for (let i = 0; i < 4; i++) {
      const nextX = currentX + dx[i];
      const nextY = currentY + dy[i];

      if (
        0 <= nextX &&
        nextX < rowLength &&
        0 <= nextY &&
        nextY < colLength &&
        graph[nextX][nextY] !== 'X' &&
        !visited[nextX][nextY]
      ) {
        visited[nextX][nextY] = true;
        queue.push([nextX, nextY, currentTime + 1]);
      }
    }
  }

  return -1;
}
