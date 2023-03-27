// 2023-03-27
const threeSum = nums => {
  const result = [];
  nums.sort((a, b) => a - b);

  nums.forEach((num, index) => {
    if (index > 0 && num === nums[index - 1]) return;

    let left = index + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = num + nums[left] + nums[right];

      if (sum === 0) {
        result.push([num, nums[left], nums[right]]);
        left += 1;
        while (nums[left] === nums[left - 1]) {
          left += 1;
        }
      }

      if (sum < 0) left += 1;
      if (sum > 0) right -= 1;
    }
  });

  return result;
};

// 2023-03-26
// const threeSum = nums => {
//   const sortedNums = nums.sort((a, b) => a - b);
//   const result = [];

//   for (let i = 0; i < sortedNums.length - 2; i++) {
//     if (nums[i] === nums[i - 1]) continue;
//     if (nums[i] > 0) break;

//     for (let j = i + 1; j < sortedNums.length - 1; j++) {
//       if (j > i + 1 && nums[j] === nums[j - 1]) continue;
//       if (nums[i] + nums[j] > 0) break;

//       for (let k = j + 1; k < sortedNums.length; k++) {
//         if (k > j + 1 && nums[k] === nums[k - 1]) continue;
//         if (nums[i] + nums[j] + nums[k] > 0) break;

//         if (nums[i] + nums[j] + nums[k] === 0) {
//           result.push([nums[i], nums[j], nums[k]]);
//         }
//       }
//     }
//   }

//   return result;
// };
