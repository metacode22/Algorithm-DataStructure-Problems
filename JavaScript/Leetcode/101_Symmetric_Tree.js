var isSymmetric = function (root) {
  const leftResult = [];
  const rightResult = [];

  const goLeft = node => {
    leftResult.push(node.val);

    if (node.left) {
      goLeft(node.left);
    } else {
      leftResult.push(null);
    }
    if (node.right) {
      goLeft(node.right);
    } else {
      leftResult.push(null);
    }
  };

  const goRight = node => {
    rightResult.push(node.val);

    if (node.right) {
      goRight(node.right);
    } else {
      rightResult.push(null);
    }
    if (node.left) {
      goRight(node.left);
    } else {
      rightResult.push(null);
    }
  };

  if (root.left) goLeft(root.left);
  if (root.right) goRight(root.right);

  if (leftResult.length >= rightResult.length) {
    return leftResult.every((value, index) => value === rightResult[index]);
  } else {
    return rightResult.every((value, index) => value === leftResult[index]);
  }
};
