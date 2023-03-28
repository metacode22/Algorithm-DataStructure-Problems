const productExceptSelf = nums => {
  const leftDP = new Array(nums.length).fill(0);
  const rightDP = new Array(nums.length).fill(0);
  const result = new Array(nums.length).fill(0);
  leftDP[0] = 1;
  rightDP[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    leftDP[i] = nums[i - 1] * leftDP[i - 1];
  }

  for (let j = nums.length - 2; j >= 0; j--) {
    rightDP[j] = nums[j + 1] * rightDP[j + 1];
  }

  leftDP.forEach((num, index) => {
    result[index] = num * rightDP[index];
  });

  return result;
};
