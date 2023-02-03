function solution(land) {
  const newLands = [...land];

  newLands.forEach((land, index) => {
    if (index === 0) return;

    const lastLand = newLands[index - 1];
    newLands[index][0] = Math.max(lastLand[1], lastLand[2], lastLand[3]) + newLands[index][0];
    newLands[index][1] = Math.max(lastLand[0], lastLand[2], lastLand[3]) + newLands[index][1];
    newLands[index][2] = Math.max(lastLand[0], lastLand[1], lastLand[3]) + newLands[index][2];
    newLands[index][3] = Math.max(lastLand[0], lastLand[1], lastLand[2]) + newLands[index][3];
  });

  return Math.max(...newLands[newLands.length - 1]);
}

// 2022-12-25
// function solution(land) {
//   const landRowLength = land.length;
//   const landColLength = land[0].length;

//   const dp = Array.from({ length: landRowLength }, (_, index) => {
//     if (index === 0) {
//       return land[0];
//     } else {
//       return Array.from({ length: landColLength }, () => 0);
//     }
//   });

//   for (let i = 1; i < land.length; i++) {
//     dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]) + land[i][0];
//     dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][2], dp[i - 1][3]) + land[i][1];
//     dp[i][2] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][3]) + land[i][2];
//     dp[i][3] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]) + land[i][3];
//   }

//   return Math.max(...dp[dp.length - 1]);
// }
