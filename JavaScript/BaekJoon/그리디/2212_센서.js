const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const k = Number(input[1]);
const sensors = input[2].split(' ').map(string => Number(string));

const solution = (n, k, sensors) => {
  const sensorsSorted = [...sensors].sort((a, b) => a - b);
  const distancesBetweenSensors = [];

  for (let i = 0; i < n - 1; i++) {
    distancesBetweenSensors.push(sensorsSorted[i + 1] - sensorsSorted[i]);
  }

  const distancesBetweenSensorsSorted = [...distancesBetweenSensors].sort((a, b) => b - a);

  return distancesBetweenSensorsSorted.slice(k - 1).reduce((acc, curr) => acc + curr, 0);
};

const result = solution(n, k, sensors);
console.log(result);
