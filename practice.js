function solution(priorities, location) {
  const newPrioritiesWithOrder = priorities.map((value, index) => [value, index]);
  let result = 0;

  while (true) {
    let currentMaxPriority = -Infinity;

    newPrioritiesWithOrder.forEach(([priorityValue]) => {
      if (priorityValue > currentMaxPriority) {
        currentMaxPriority = priorityValue;
      }
    });

    if (newPrioritiesWithOrder[0][0] >= currentMaxPriority) {
      const [_, order] = newPrioritiesWithOrder.shift();
      result += 1;

      if (order === location) {
        return result;
      }
    } else {
      newPrioritiesWithOrder.push(newPrioritiesWithOrder.shift());
    }
  }
}
