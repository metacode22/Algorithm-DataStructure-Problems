const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const nodeInput = input.slice(1).map(node => node.split(' '));
const tree = {};

for (const [root, left, right] of nodeInput) {
  tree[root] = [left, right];
}

let preorderResult = '';
let inorderResult = '';
let postorderResult = '';

const preorder = root => {
  preorderResult += root;

  if (tree[root][0] !== '.') {
    preorder(tree[root][0]);
  }

  if (tree[root][1] !== '.') {
    preorder(tree[root][1]);
  }
};

const inorder = root => {
  if (tree[root][0] !== '.') {
    inorder(tree[root][0]);
  }

  inorderResult += root;

  if (tree[root][1] !== '.') {
    inorder(tree[root][1]);
  }
};

const postorder = root => {
  if (tree[root][0] !== '.') {
    postorder(tree[root][0]);
  }

  if (tree[root][1] !== '.') {
    postorder(tree[root][1]);
  }

  postorderResult += root;
};

preorder('A');
inorder('A');
postorder('A');

console.log(preorderResult);
console.log(inorderResult);
console.log(postorderResult);
