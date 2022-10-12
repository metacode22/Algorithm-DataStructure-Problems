const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const inputString = input[0];
const m = Number(input[1]);
const inputCommands = input.slice(2);

const solution = (inputString, inputCommands) => {
  const leftStack = inputString.split('');
  const rightStack = [];

  inputCommands.forEach(inputCommand => {
    const [command, stringToAdd] = inputCommand.split(' ');

    if (command === 'L' && leftStack.length !== 0) rightStack.push(leftStack.pop());
    if (command === 'D' && rightStack.length !== 0) leftStack.push(rightStack.pop());
    if (command === 'B' && leftStack.length !== 0) leftStack.pop();
    if (command === 'P') leftStack.push(stringToAdd);
  });

  return leftStack.concat(rightStack.reverse()).join('');
};

const result = solution(inputString, inputCommands);
console.log(result);
