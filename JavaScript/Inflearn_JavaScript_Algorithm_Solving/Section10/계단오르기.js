const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = Number(fs.readFileSync(filePath).toString());

const solution = stairNumber => {
  const dp = Array.from({ length: stairNumber + 1 }, () => 0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= stairNumber; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[stairNumber];
};

const result = solution(input);
console.log(result);
