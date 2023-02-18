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

// 2023-02-18
var maxProfit = function(prices) {
  const result = [0];
  let smallestPrice = prices[0];
  let currentIndex = 1;
  let currentPrice = prices[0];
  let count = 0;

  prices.forEach(price => {
      if (price < smallestPrice) {
          smallestPrice = price;
          result[currentIndex] = count;
          count = 0;
          currentIndex += 1;
          currentPrice = price;
      } else if (currentPrice < price) {
          count += price - currentPrice;
          currentPrice = price;
      }
  })

  result[currentIndex] = count;

  return Math.max(...result);
};
