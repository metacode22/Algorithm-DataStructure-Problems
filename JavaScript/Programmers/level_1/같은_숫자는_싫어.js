function solution(arr) {
  const stack = [];
  const result = [];

  arr.forEach(number => {
    if (stack[0] !== number) {
      stack.pop();
    }

    if (!stack.length) {
      stack.push(number);
      result.push(number);
    }

    if (stack[0] === number) return;
  });

  return result;
}
