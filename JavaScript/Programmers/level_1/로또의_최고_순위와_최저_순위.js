// 다른 사람이 푼 똑똑한 풀이
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter(v => win_nums.includes(v)).length;
  let zeroCount = lottos.filter(v => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}

// 내가 한 풀이, 맞긴 맞음.
function solution(lottos, win_nums) {
  let sameCount = 0;
  let zeroCount = 0;
  let lowestRank;
  let highestRank;

  lottos.forEach(num => {
    if (win_nums.includes(num)) {
      sameCount += 1;
    }

    if (num === 0) {
      zeroCount += 1;
    }
  });

  if (7 - sameCount > 6) {
    lowestRank = 6;
  } else {
    lowestRank = 7 - sameCount;
  }

  if (7 - sameCount - zeroCount > 6) {
    highestRank = 6;
  } else {
    highestRank = 7 - sameCount - zeroCount;
  }

  return [highestRank, lowestRank];
}
