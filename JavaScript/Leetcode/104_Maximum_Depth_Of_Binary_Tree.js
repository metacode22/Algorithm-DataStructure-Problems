var maxDepth = function (root) {
  if (root === null) return 0;

  let result = -1;

  const _DFS = (current, level) => {
    if (level > result) result = level;

    if (current.left) _DFS(current.left, level + 1);
    if (current.right) _DFS(current.right, level + 1);
  };

  _DFS(root, 1);

  return result;
};
