var longestPalindrome = function (s) {
  const sArray = s.split('');
  let result = sArray[0];

  const expand = (left, right) => {
    while (left >= 0 && right < sArray.length) {
      if (sArray[left] === sArray[right]) {
        if (sArray.slice(left, right + 1).length > result.length) {
          result = sArray.slice(left, right + 1).join('');
        }

        left -= 1;
        right += 1;
        continue;
      }

      return;
    }
  };

  sArray.forEach((_, index) => {
    let left = index;
    let evenRight = index + 1;
    let oddRight = index + 2;

    expand(left, evenRight);
    expand(left, oddRight);
  });

  return result;
};
