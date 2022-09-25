const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const word = input[0];

const solution = word => {
    const wordLength = word.length;

    return wordLength % 2 ? word[parseInt(wordLength / 2)] : word[wordLength / 2 - 1] + word[wordLength / 2];
};

const result = solution(word);
console.log(result);
