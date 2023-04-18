const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

function solution(maps) {
  const newMaps = maps.map(map => map.split(''));
  const result = [];
  const [rowLength, colLength] = [newMaps.length, newMaps[0].length];

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      let sum = 0;

      if (newMaps[i][j] !== 'X') {
        sum += Number(newMaps[i][j]);
        newMaps[i][j] = 'X';
        const queue = [[i, j]];
        while (queue.length) {
          const [cx, cy] = queue.shift();

          for (let k = 0; k < 4; k++) {
            const nx = cx + dx[k];
            const ny = cy + dy[k];

            if (0 <= nx && nx < rowLength && 0 <= ny && ny < colLength && newMaps[nx][ny] !== 'X') {
              sum += Number(newMaps[nx][ny]);
              newMaps[nx][ny] = 'X';
              queue.push([nx, ny]);
            }
          }
        }
      }

      if (sum) result.push(sum);
    }
  }

  if (!result.length) return [-1];
  return result.sort((a, b) => Number(a) - Number(b));
}
