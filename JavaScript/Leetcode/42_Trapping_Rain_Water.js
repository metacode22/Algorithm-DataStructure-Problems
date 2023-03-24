const trap = heights => {
  const maxHeight = Math.max(...heights);
  let left = 0;
  let right = heights.length - 1;
  let result = 0;
  let maxLeftHeight = 0;
  let maxRightHeight = 0;

  while (left < right) {
    maxLeftHeight = Math.max(maxLeftHeight, heights[left]);
    maxRightHeight = Math.max(maxRightHeight, heights[right]);

    if (heights[left] <= heights[right]) {
      result += maxLeftHeight - heights[left];
      left += 1;
    } else {
      result += maxRightHeight - heights[right];
      right -= 1;
    }
  }

  return result;
};
