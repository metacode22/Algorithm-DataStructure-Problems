var moveZeroes = function (nums) {
  if (nums.length < 2) return;

  let left = 0;
  let right = 1;

  while (right < nums.length) {
    if (!nums[left] && nums[right]) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right++;
    }

    if (!nums[left] && !nums[right]) {
      right++;
    }

    if (nums[left] && nums[right]) {
      left++;
      right++;
    }

    if (nums[left] && !nums[right]) {
      left++;
      right++;
    }
  }
};
