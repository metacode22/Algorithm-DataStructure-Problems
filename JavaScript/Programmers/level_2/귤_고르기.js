function solution(k, tangerine) {
  const record = new Map();
  let current = k;
  let count = 0;

  tangerine.forEach(size => {
    record.get(size) ? record.set(size, record.get(size) + 1) : record.set(size, 1);
  });

  const sortedRecordArray = Array.from(record).sort((a, b) => b[1] - a[1]);
  for (const [key, value] of sortedRecordArray) {
    current -= value;
    count += 1;

    if (current <= 0) {
      return count;
    }
  }
}
