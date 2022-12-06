const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim();

function StringChallenge(str) {
  const words = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    minus: '-',
    plus: '+',
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    '-': 'negative',
  };
  const stack = [];
  const inputArray = str.split('');
  let expression = '';

  inputArray.forEach(value => {
    stack.push(value);
    const current = stack.join('');

    if (current in words) {
      expression += words[current];
      while (stack.length) {
        stack.pop();
      }
    }
  });

  const isIncludePlus = expression.includes('+');
  const isIncludeMinus = expression.includes('-');
  let result = 0;

  if (isIncludePlus && isIncludeMinus) {
    const current = expression.split('+');
    current.forEach(num => {
      if (num.includes('-')) {
        const numCurrent = num.split('-');
        result += Number(numCurrent[0]) - Number(numCurrent[1]);
      } else {
        result += Number(num);
      }
    });
  } else if (isIncludePlus) {
    const current = expression.split('+');
    result = current.reduce((acc, curr) => Number(acc) + Number(curr));
  } else if (isIncludeMinus) {
    const current = expression.split('-');
    result = current.reduce((acc, curr) => Number(acc) - Number(curr));
  }
  result = String(result);
  result = result.split('');
  let realResult = '';

  result.forEach(num => {
    realResult += words[num];
  });

  return realResult;
}

console.log(StringChallenge(input));

// keep this function call here
// console.log(StringChallenge(readline()));
