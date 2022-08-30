const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(element => Number(element));
const cards = input[1].split(' ').map(element => Number(element));

function solution(n, m, cards) {
    let result = -1;
    
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                const sum = cards[i] + cards[j] + cards[k];
                
                if (sum <= m) {
                    if (sum > result) {
                        result = sum;
                    }
                }
            }
        }
    }
    
    return result;
}

const result = solution(n, m, cards);
console.log(result);