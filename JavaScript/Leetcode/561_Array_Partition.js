const arrayPairSum = nums => {
  const sortedNums = nums.sort((a, b) => a - b);
  let result = 0;

  for (let i = 1; i < sortedNums.length; i = i + 2) {
    result += Math.min(nums[i - 1], nums[i]);
  }

  return result;
};
