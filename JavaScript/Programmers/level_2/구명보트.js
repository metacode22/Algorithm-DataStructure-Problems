// 2023-02-07
function solution(people, limit) {
  if (people.length === 1) {
    return 1;
  }

  const sortedPeople = [...people].sort((a, b) => a - b);
  let count = 0;

  while (sortedPeople.length) {
    if (sortedPeople[0] + sortedPeople[sortedPeople.length - 1] <= limit) {
      sortedPeople.shift();
    }

    count += 1;
    sortedPeople.pop();
  }

  return count;
}

function solution(people, limit) {
  const newPeople = [...people].sort((a, b) => a - b);
  let left = 0;
  let right = newPeople.length - 1;
  let totalBoat = 0;

  while (left <= right) {
    if (newPeople[left] + newPeople[right] > limit) {
      right -= 1;
      totalBoat += 1;
      continue;
    }

    left += 1;
    right -= 1;
    totalBoat += 1;
  }

  return totalBoat;
}
