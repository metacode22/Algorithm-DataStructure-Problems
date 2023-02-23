function solution(n, a, b) {
  let currentA = a;
  let currentB = b;
  let currentN = n;
  let count = 1;

  while (currentN > 0) {
    if (currentB > currentA && currentB - currentA === 1) {
      if (currentB % 2 === 0) return count;
    }

    if (currentA > currentB && currentA - currentB === 1) {
      if (currentA % 2 === 0) return count;
    }

    if (currentA % 2) {
      currentA = Math.ceil(currentA / 2);
    } else {
      currentA = currentA / 2;
    }

    if (currentB % 2) {
      currentB = Math.ceil(currentB / 2);
    } else {
      currentB = currentB / 2;
    }

    currentN /= 2;
    count += 1;
  }
}
