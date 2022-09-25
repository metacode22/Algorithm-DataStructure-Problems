function solution(A,B){
  const newA = A.sort((a, b) => a - b);
  const newB = B.sort((a, b) => b - a);
  
  return newA.reduce((accumulator, value, index) => accumulator + value * newB[index], 0);
}