function solution(dirs) {
  const UDRL = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };
  const directions = dirs.split('');
  const set = new Set();
  let currentX = 0;
  let currentY = 0;
  let count = 0;

  directions.forEach(direction => {
    const [nextXDirection, nextYDirection] = UDRL[direction];
    const nextX = currentX + nextXDirection;
    const nextY = currentY + nextYDirection;

    if (-5 <= nextX && nextX <= 5 && -5 <= nextY && nextY <= 5) {
      if (!set.has([currentX, currentY].join('') + [nextX, nextY].join(''))) {
        count += 1;
      }
      set.add([currentX, currentY].join('') + [nextX, nextY].join(''));
      set.add([nextX, nextY].join('') + [currentX, currentY].join(''));
      currentX = nextX;
      currentY = nextY;
    }
  });

  return count;
}
