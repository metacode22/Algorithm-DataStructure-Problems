const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const dwarfs = input[0].split(' ').map(string => Number(string));

const solution = dwarfs => {
  const newDwarfs = [...dwarfs];
  const sumNewDwarfs = newDwarfs.reduce((acc, curr) => acc + curr, 0);

  for (let i = 0; i < newDwarfs.length - 1; i++) {
    for (let j = i + 1; j < newDwarfs.length; j++) {
      if (sumNewDwarfs - newDwarfs[i] - newDwarfs[j] === 100) {
        newDwarfs.splice(i, 1, 0);
        newDwarfs.splice(j, 1, 0);
        return newDwarfs.filter(dwarf => dwarf);
      }
    }
  }
};

const result = solution(dwarfs);
console.log(...result);
