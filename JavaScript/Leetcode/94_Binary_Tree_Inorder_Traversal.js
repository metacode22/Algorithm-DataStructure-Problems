const inorderTraversal = (root, result = []) => {
  if (root) {
    if (root.left) inorderTraversal(root.left, result);
    result.push(root.val);
    if (root.right) inorderTraversal(root.right, result);
  }

  return result;
};
