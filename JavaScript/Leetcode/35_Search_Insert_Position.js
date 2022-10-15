// Binary Search로 O(log N)
var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left <= right) {
      const mid = parseInt((left + right) / 2);
      
      if (nums[mid] === target) return mid;
      if (nums[mid] > target) right = mid - 1;
      if (nums[mid] < target) left = mid + 1;
  }
  
  return left;
};

// for문으로 O(N)
// var searchInsert = function (nums, target) {
//   let count = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (i === 0 && nums[i] > target) {
//       return i;
//     }

//     if (nums[i] === target) {
//       return i;
//     }

//     if (nums[i + 1] && nums[i] < target && target < nums[i + 1]) {
//       return i + 1;
//     }
//   }

//   return nums.length;
// };
