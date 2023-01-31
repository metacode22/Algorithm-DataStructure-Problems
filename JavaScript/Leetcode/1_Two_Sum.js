// 2023-01-29
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

var twoSum = function (nums, target) {
  const initialNums = [...nums];
  const newNums = [...nums].sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;

  // 문제에서 정확히 하나의 솔루션이 있다고, 즉 하나의 답이 꼭 존재한다는 것이니까
  // while (true)로 해도 상관 없을 것 같다. (실제로 true로 바꿨는데 답이나 성능에 전혀 문제 없었다)
  // 어차피 left <= right가 깨지기 전에 답이 나올거니까
  while (left <= right) {
    if (newNums[left] + newNums[right] === target) {
      const newLeft = initialNums.indexOf(newNums[left]);
      initialNums.splice(newLeft, 1, 'dummy');
      const newRight = initialNums.indexOf(newNums[right]);

      return [newLeft, newRight];
    }

    if (newNums[left] + newNums[right] > target) {
      right -= 1;
    }

    if (newNums[left] + newNums[right] < target) {
      left += 1;
    }
  }
};

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
