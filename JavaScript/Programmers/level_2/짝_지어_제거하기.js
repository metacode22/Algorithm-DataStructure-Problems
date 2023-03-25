// 2023-03-25
const solution = alphabets => {
  const stack = [];

  alphabets.split('').forEach(alphabet => {
    if (stack.length && stack[stack.length - 1] === alphabet) {
      stack.pop();
    } else {
      stack.push(alphabet);
    }
  });

  return stack.length === 0 ? 1 : 0;
};

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
