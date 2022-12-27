var generate = function (numRows) {
  const result = [[1]];

  for (let i = 1; i < numRows; i++) {
    const current = [];

    if (i === 1) {
      current.push(1);
      current.push(1);
    } else {
      current.push(1);

      for (let j = 1; j < i; j++) {
        current.push(result[i - 1][j - 1] + result[i - 1][j]);
      }

      current.push(1);
    }

    result.push(current);
  }

  return result;
};
