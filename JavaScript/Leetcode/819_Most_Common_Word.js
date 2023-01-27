var mostCommonWord = function (paragraph, banned) {
  const words = paragraph
    .toLowerCase()
    .split(/[ !?',;.]/)
    .filter(word => word !== '');
  const record = {};
  let result;

  words.forEach(word => {
    if (banned.includes(word)) {
      record[word] = 0;
      return;
    }

    record[word] = record[word] ? record[word] + 1 : 1;

    if (!result) {
      result = word;
      return;
    }

    if (record[word] > record[result]) {
      result = word;
    }
  });

  return result;
};
