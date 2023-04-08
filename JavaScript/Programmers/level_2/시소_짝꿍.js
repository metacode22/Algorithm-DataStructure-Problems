// 2023-04-08
function solution(weights) {
  let count = 0;
  const map = new Map();
  const rationes = [1, 1.5, 2, 2 / 3, 4 / 3, 0.5, 0.75];

  weights.forEach(weight => {
    rationes.forEach(ratio => {
      if (map.has(weight * ratio)) {
        count += map.get(weight * ratio);
      }
    });

    map.set(weight, (map.get(weight) || 0) + 1);
  });

  return count;
}
