function solution(s) {
  if (s[0] === ')') {
    return false;
  }

  const stack = new Array();

  for (let bracket of s) {
    if (bracket === '(') {
      stack.push(bracket);
    }

    if (bracket === ')') {
      if (stack.length === 0) {
        return false;
      }

      if (stack[stack.length - 1] === '(') {
        stack.pop();
      }

      if (stack[stack.length - 1] === ')') {
        return false;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
}
