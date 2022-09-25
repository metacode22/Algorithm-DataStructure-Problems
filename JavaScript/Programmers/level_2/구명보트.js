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