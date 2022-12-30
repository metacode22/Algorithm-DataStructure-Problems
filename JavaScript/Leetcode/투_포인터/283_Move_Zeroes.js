// 2022.12.30.
var moveZeroes = function (nums) {
  if (nums.length === 1) {
    return nums;
  }

  let left = 0;
  let right = 1;

  while (right < nums.length) {
    if (nums[left] === 0 && nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left += 1;
      right += 1;
    } else if (nums[left] !== 0 && nums[right] === 0) {
      left = right;
      right += 1;
    } else {
      right += 1;
    }
  }

  return nums;
};

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
