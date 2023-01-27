var groupAnagrams = function (strs) {
  const record = {};

  strs.forEach(str => {
    const sortedStr = str.split('').sort().join('');
    record[sortedStr] ??= [];
    record[sortedStr].push(str);
  });

  return Object.values(record);
};
