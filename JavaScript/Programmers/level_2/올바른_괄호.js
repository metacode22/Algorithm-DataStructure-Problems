// 나의 풀이
// function solution(s){
//   const brackets = s.split('');
//   const stack = [];

//   for (const bracket of brackets) {
//       if (stack.length > 0) {
//           if (bracket === '(') stack.push(bracket);
//           if (bracket === ')') stack.pop();
//       } else {
//           if (bracket === '(') stack.push(bracket);
//           if (bracket === ')') return false;
//       }
//   }

//   if (stack.length > 0) return false;

//   return true;
// }

// 프로그래머스 데브코스 이선협 강사님의 풀이 1
// 강사님은 여기서 배열 대신 그냥 문자열 s 그대로 사용함. 나는 그냥 배열로 나타내는게 보기 좋아서 밑과 같이 사용
// function solution(s){
//   const brackets = s.split('');
//   const stack = [];

//   for (const bracket of brackets) {
//       if (bracket === '(') stack.push(bracket);
//       else {
//           if (stack.length === 0) return false;

//           stack.pop();
//       }
//   }

//   return stack.length === 0;
// }

// 프로그래머스 데브코스 이선협 강사님의 풀이 2
// stack이라는 배열 자료구조를 이용하지 않기 때문에 메모리를 절약할 수 있다.
// function solution(s){
//   let count = 0;

//   for (const bracket of s) {
//       if (bracket === '(') count += 1;
//       else {
//           if (count === 0) return false;

//           count -= 1;
//       }
//   }

//   return count === 0;
// }
