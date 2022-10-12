let count = 0;

function DFS(level, index, plusMinus, newNumbers, target) {
  newNumbers.reduce(
    (accumulator, currentValue, currentIndex) => accumulator + currentValue * plusMinus[currentIndex],
    0,
  ) === target
    ? count++
    : null;

  for (let i = index; i < plusMinus.length; i++) {
    if (plusMinus[i] === -1) {
      plusMinus[i] = 1;
      DFS(level + 1, i + 1, plusMinus, newNumbers, target);
      plusMinus[i] = -1;
    }
  }
}

function solution(numbers, target) {
  const newNumbers = [...numbers];
  const plusMinus = new Array(newNumbers.length).fill(-1);

  DFS(0, 0, plusMinus, newNumbers, target);

  return count;
}
