function addUpTo1(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) total += i;

  return total;
}

const time1 = performance.now();
addUpTo1(1000000000); // 100억
const time2 = performance.now();

console.log(`${(time2 - time1) / 1000} seconds`);

function addUpTo2(n) {
  return (total = (n * (n + 1)) / 2);
}

const time3 = performance.now();
addUpTo2(1000000000); // 100억
const time4 = performance.now();

console.log(`${(time4 - time3) / 1000} seconds`);
