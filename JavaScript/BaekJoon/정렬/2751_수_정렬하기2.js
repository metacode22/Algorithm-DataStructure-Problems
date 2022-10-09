// 퀵 정렬, 시간 초과 뜬다.
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// const input = fs.readFileSync(filePath).toString().trim().split('\n').map(string => Number(string));

// const n = input[0];
// const numbers = input.slice(1);

// const divide = (numbers, left, right, pivot) => {
//   while(left <= right) {
//     while(numbers[left] < pivot) left++;
//     while(numbers[right] > pivot) right--;

//     if(left <= right) {
//       [numbers[left], numbers[right]] = [numbers[right], numbers[left]];
//       left++;
//       right--;
//     }
//   }

//   return left;
// }

// const solution = (numbers, left = 0, right = numbers.length - 1) => {
//   if (left >= right) return;

//   const pivot = numbers[Math.floor((left + right) / 2)];
//   const partition = divide(numbers, left, right, pivot);

//   solution(numbers, left, partition - 1);
//   solution(numbers, partition, right);
// }

// solution(numbers);
// console.log(numbers.join('\n'));

// 그냥 sort
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map(string => Number(string));

const numbers = input.slice(1);

const solution = numbers => {
    const newNumbers = [...numbers];
    newNumbers.sort((a, b) => a - b);

    return newNumbers;
};

const result = solution(numbers).join('\n');
console.log(result);
