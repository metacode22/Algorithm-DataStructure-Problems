// 2023-04-14
function solution(people, limit) {
  const sortedPeople = people.sort((a, b) => a - b);
  let result = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (sortedPeople[left] + sortedPeople[right] <= limit) left += 1;

    result += 1;
    right -= 1;
  }

  return result;
}

// 2023-02-07
// function solution(people, limit) {
//   if (people.length === 1) {
//     return 1;
//   }

//   const sortedPeople = [...people].sort((a, b) => a - b);
//   let count = 0;

//   while (sortedPeople.length) {
//     if (sortedPeople[0] + sortedPeople[sortedPeople.length - 1] <= limit) {
//       sortedPeople.shift();
//     }

//     count += 1;
//     sortedPeople.pop();
//   }

//   return count;
// }

// function solution(people, limit) {
//   const newPeople = [...people].sort((a, b) => a - b);
//   let left = 0;
//   let right = newPeople.length - 1;
//   let totalBoat = 0;

//   while (left <= right) {
//     if (newPeople[left] + newPeople[right] > limit) {
//       right -= 1;
//       totalBoat += 1;
//       continue;
//     }

//     left += 1;
//     right -= 1;
//     totalBoat += 1;
//   }

//   return totalBoat;
// }
