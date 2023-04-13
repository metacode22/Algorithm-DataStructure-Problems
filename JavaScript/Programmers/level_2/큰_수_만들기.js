function solution(number, k) {
  const stack = [];
  const numberArray = number.split('');
  let count = 0;

  numberArray.forEach(n => {
    while (count < k && stack.length && stack[stack.length - 1] < n) {
      stack.pop();
      count += 1;
    }

    stack.push(n);
  });

  while (stack.length && count < k) {
    stack.pop();
    count += 1;
  }

  return stack.join('');
}
