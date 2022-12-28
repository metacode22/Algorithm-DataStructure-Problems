var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let result = 0;

  while (right < prices.length) {
    const buy = prices[left];
    const sell = prices[right];

    if (buy > sell) {
      left = right;
      right += 1;
    } else {
      if (sell - buy > result) {
        result = sell - buy;
      }

      right += 1;
    }
  }

  return result;
};
