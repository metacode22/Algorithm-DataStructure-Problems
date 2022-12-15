function solution(s) {
  const stack = [];

  for (const element of s) {
    if (!stack.length || stack[stack.length - 1] !== element) {
      stack.push(element);
    } else {
      stack.pop();
    }
  }

  return stack.length ? 0 : 1;
}
