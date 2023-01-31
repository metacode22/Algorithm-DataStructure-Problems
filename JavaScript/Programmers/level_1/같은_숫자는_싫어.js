// 2023-01-02
function solution(arr) {
  const stack = [];

  arr.forEach((value, index) => {
    if (index === 0 || value !== stack[stack.length - 1]) {
      stack.push(value);
    }
  });

  return stack;
}

// function solution(arr) {
//   const stack = [];
//   const result = [];

//   arr.forEach(number => {
//     if (stack[0] !== number) {
//       stack.pop();
//     }

//     if (!stack.length) {
//       stack.push(number);
//       result.push(number);
//     }

//     if (stack[0] === number) return;
//   });

//   return result;
// }
