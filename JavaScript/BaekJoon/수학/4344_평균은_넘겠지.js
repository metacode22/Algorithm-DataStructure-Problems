const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
input = input.split('\n');

const testCaseNumber = Number(input[0]);

for (let i = 1; i <= testCaseNumber; i++) {
  const currentArray = input[i].split(' ');
  const studentsNumber = Number(currentArray[0]);
  const scoreArray = currentArray.map(element => Number(element)).slice(1);

  solution(studentsNumber, scoreArray);
}

function solution(studentsNumber, scoreArray) {
  const average =
    scoreArray.reduce((sum, currentValue) => {
      return sum + currentValue;
    }) / studentsNumber;
  const goodStudentsNumber = scoreArray.filter(score => score > average).length;

  const result = (Math.round((goodStudentsNumber / studentsNumber) * 100000) / 1000).toFixed(3);
  console.log(String(result) + '%');
}
