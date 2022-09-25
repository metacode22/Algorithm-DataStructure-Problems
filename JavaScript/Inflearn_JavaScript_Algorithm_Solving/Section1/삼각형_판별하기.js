const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const inputArray = input[0].split(' ').map(element => Number(element));

const solution = (inputArray) => {
  const newInputArray = [...inputArray];
  let maxSide = newInputArray[0];
  let maxSideIndex = 0;
  
  newInputArray.forEach((side, index) => {
    if (side > maxSide) {
      maxSide = side;
      maxSideIndex = index;
    }
  })
  
  const restSides = newInputArray.filter((_, index) => index !== maxSideIndex);
  const sumRestSides = restSides.reduce((acc, curr) => acc + curr, 0);
  
  if (maxSide >= sumRestSides) return 'NO';
  return 'YES';
}

const result = solution(inputArray);
console.log(result);