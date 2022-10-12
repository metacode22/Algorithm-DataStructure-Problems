var isValid = function (s) {
  const stack = new Array();

  for (let bracket of s) {
    if (bracket === '(' || bracket === '[' || bracket === '{') {
      stack.push(bracket);

      continue;
    }

    if (stack.length === 0) {
      return false;
    }

    if (
      (bracket === ')' && stack[stack.length - 1] === '(') ||
      (bracket === ']' && stack[stack.length - 1] === '[') ||
      (bracket === '}' && stack[stack.length - 1] === '{')
    ) {
      stack.pop();

      continue;
    }

    return false;
  }

  if (stack.length === 0) {
    return true;
  }

  return false;
};
