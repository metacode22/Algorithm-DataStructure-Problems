const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const day = Number(input[0]);
const cars = input[1].split(' ').map(string => Number(string));

const solution = (day, cars) => {
    const newCars = [...cars];
    const violatedCars = newCars.filter(car => car % 10 === day);

    return violatedCars.length;
};

const result = solution(day, cars);
console.log(result);
