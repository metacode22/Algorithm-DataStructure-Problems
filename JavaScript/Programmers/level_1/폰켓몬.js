function solution(nums) {
  const map = new Map();
  const numsLength = nums.length;

  nums.forEach(num => {
    const currentValue = map.get(num);

    if (!currentValue) map.set(num, 1);
    else map.set(num, currentValue + 1);
  });

  const piecesNumber = map.size;

  if (numsLength / 2 <= piecesNumber) return numsLength / 2;

  return piecesNumber;
}
