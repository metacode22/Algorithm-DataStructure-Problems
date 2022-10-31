var majorityElement = function (nums) {
  const map = new Map();
  let resultValue = -Infinity;
  let resultKey;

  nums.forEach(num => {
    if (!map.get(num)) map.set(num, 1);
    map.set(num, map.get(num) + 1);
  });

  map.forEach((value, key) => {
    if (value > resultValue) {
      resultValue = value;
      resultKey = key;
    }
  });

  return resultKey;
};

// 문제를 좀 잘 봐라...
var majorityElement = function (nums) {
  const map = new Map();

  for (const num of nums) {
    if (!map.get(num)) map.set(num, 0);
    map.set(num, map.get(num) + 1);

    if (map.get(num) >= nums.length / 2) return num;
  }
};
