function solution(begin, target, words) {
  const visited = new Array(words.length).fill(false);
  let result = Infinity;

  words.forEach((word, index) => {
    const count = _countDiff(begin, word);

    if (count === 1) {
      visited[index] = true;
      _DFS(1, word);
    }
  });

  return result === Infinity ? 0 : result;

  function _DFS(count, current) {
    if (current === target) {
      if (count < result) {
        result = count;
      }

      return;
    }

    words.forEach((word, index) => {
      if (!visited[index] && _countDiff(current, word) === 1) {
        visited[index] = true;
        _DFS(count + 1, word);
        visited[index] = false;
      }
    });
  }

  function _countDiff(current, compare) {
    let count = 0;
    const currentArray = current.split('');
    const wordArray = compare.split('');

    wordArray.forEach((alphabet, index) => {
      if (alphabet !== currentArray[index]) count += 1;
    });

    return count;
  }
}
