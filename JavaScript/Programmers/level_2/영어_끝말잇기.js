function solution(n, words) {
  let lastAlphabet = '';
  const totalWords = new Set();

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      totalWords.add(words[i]);
      lastAlphabet = words[i].slice(-1);
      continue;
    }

    const currentUser = (i % n) + 1;
    const currentOrder = Math.ceil((i + 1) / n);
    const firstAlphabet = words[i].slice(0, 1);
    if (firstAlphabet !== lastAlphabet || totalWords.has(words[i])) {
      return [currentUser, currentOrder];
    }
    lastAlphabet = words[i].slice(-1);
    totalWords.add(words[i]);
  }

  return [0, 0];
}
