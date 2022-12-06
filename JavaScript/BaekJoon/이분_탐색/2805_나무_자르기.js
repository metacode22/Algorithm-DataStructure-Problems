const fs = require('fs');
const { transferableAbortSignal } = require('util');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(string => Number(string));
const trees = input[1].split(' ').map(string => Number(string));

const calculateHeight = (height, trees) => {
  return trees.reduce((currentHeight, tree) => {
    return height >= tree ? currentHeight : currentHeight + (tree - height);
  }, 0);
};

const solution = (n, m, trees) => {
  const sortedTrees = [...trees].sort((a, b) => a - b);
  let left = 0;
  let right = sortedTrees[sortedTrees.length - 1];

  while (left <= right) {
    const mid = parseInt((left + right) / 2);
    const totalHeight = calculateHeight(mid, sortedTrees);
    console.log(left, right);
    if (totalHeight >= m) left = mid + 1;
    else right = mid - 1;
  }

  return right;
};

const result = solution(n, m, trees);
console.log(result);
