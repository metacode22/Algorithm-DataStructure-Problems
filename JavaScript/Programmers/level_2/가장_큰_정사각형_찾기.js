function solution(board) {
  let maxValue = 0;
  const dp = new Array();
  dp.push(new Array(board[0].length + 1).fill(0));

  board.forEach(element => {
    element.unshift(0);
    dp.push(element);
  });

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (dp[i][j] !== 0) {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;

        if (maxValue < dp[i][j]) {
          maxValue = dp[i][j];
        }
      }
    }
  }

  return maxValue * maxValue;
}

// 2022-12-27
function solution(board) {
  const rowLength = board.length;
  const colLength = board[0].length;
  let result = board[0][0];

  for (let i = 1; i < rowLength; i++) {
    for (let j = 1; j < colLength; j++) {
      if (board[i][j]) {
        board[i][j] = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;

        if (board[i][j] > result) {
          result = board[i][j];
        }
      }
    }
  }

  return result * result;
}
