function solution(n, lost, reserve) {
  const newLost = lost.filter(element => reserve.includes(element) === false).sort((a, b) => a - b);
  const newReserve = reserve.filter(element => lost.includes(element) === false).sort((a, b) => a - b);

  newReserve.forEach(element => {
    let index1;
    let index2;
    if ((index1 = newLost.indexOf(element - 1)) !== -1) {
      newLost.splice(index1, 1);

      return;
    }

    if ((index2 = newLost.indexOf(element + 1)) !== -1) {
      newLost.splice(index2, 1);

      return;
    }
  });

  return n - newLost.length;
}
