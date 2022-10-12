function solution(numbers) {
  const visited = new Array(10).fill(false);

  numbers.forEach(number => {
    visited[number] = true;
  });

  return visited.reduce(
    (accumulator, currentValue, currentIndex) => (!currentValue ? accumulator + currentIndex : accumulator),
    0,
  );
}
