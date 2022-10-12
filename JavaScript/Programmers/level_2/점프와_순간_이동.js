function solution(n) {
  let count = 0;

  while (n > 0) {
    if (n % 2) count++;

    n = parseInt(n / 2);
  }

  return count;
}
