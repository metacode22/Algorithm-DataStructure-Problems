const threeSum = nums => {
  const sortedNums = nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sortedNums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) continue;
    if (nums[i] > 0) break;

    for (let j = i + 1; j < sortedNums.length - 1; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      if (nums[i] + nums[j] > 0) break;

      for (let k = j + 1; k < sortedNums.length; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;
        if (nums[i] + nums[j] + nums[k] > 0) break;

        if (nums[i] + nums[j] + nums[k] === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }

  return result;
};
