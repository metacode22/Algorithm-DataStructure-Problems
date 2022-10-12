const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);

function solution(n) {
  if (n === 1) {
    return 1;
  }

  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
  }

  return dp[n];
}

const result = solution(n);
console.log(result);
