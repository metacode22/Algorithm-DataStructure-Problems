function solution(absolutes, signs) {
  const result = absolutes.reduce((accumulator, currentValue, currentIndex) => {
      return signs[currentIndex] ? accumulator + currentValue : accumulator - currentValue;
  }, 0)
  
  return result;
}