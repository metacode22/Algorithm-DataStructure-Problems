function solution(maps) {
  const newMaps = [...maps];
  const n = newMaps[0].length;
  const m = newMaps.length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = new Array();
  queue.push([0, 0, 1]);

  while (queue.length > 0) {
    const [cx, cy, count] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (0 <= nx && nx < m && 0 <= ny && ny < n && newMaps[nx][ny] === 1) {
        if (nx === m - 1 && ny === n - 1) {
          return count + 1;
        }

        newMaps[nx][ny] = 0;
        queue.push([nx, ny, count + 1]);
      }
    }
  }

  return -1;
}
