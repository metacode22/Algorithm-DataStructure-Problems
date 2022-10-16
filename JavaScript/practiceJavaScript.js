/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const leftResult = [];
    const rightResult = [];

    // left
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

    // right
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

    console.log(leftResult);
    console.log(rightResult);

    return leftResult.every((value, index) => value === rightResult[index]);
};
