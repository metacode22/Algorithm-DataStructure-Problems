var moveZeroes = function (nums) {
  var pos = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos++] = nums[i];
    }
    console.log(nums);
  }

  console.log(nums, pos);
  for (i = pos; i < nums.length; i++) {
    nums[i] = 0;
  }
};

const input = [0, 1, 0, 3, 12];
moveZeroes(input);
// console.log(input);
