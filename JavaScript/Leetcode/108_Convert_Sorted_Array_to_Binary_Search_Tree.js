var sortedArrayToBST = function (nums) {
  const createBST = (left, right) => {
    if (left > right) return null;

    const mid = parseInt((left + right) / 2, 10);
    const root = new TreeNode(nums[mid]);
    root.left = createBST(left, mid - 1);
    root.right = createBST(mid + 1, right);

    return root;
  };

  return createBST(0, nums.length - 1);
};
