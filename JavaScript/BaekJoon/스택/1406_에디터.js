const fs = require('fs');
// let input = fs.readFileSync('input.txt').toString().trim().split('\n');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const string = input[0];
const m = Number(input[1]);
const commands = input.slice(2);

function solution(string, m, commands) {
    let leftStack = string.split('');
    let rightStack = new Array();
    
    commands.forEach((element, index) => {
        const [command, aux] = element.split(' ');
        
        if (command === 'L' && leftStack.length !== 0) {
            rightStack.push(leftStack.pop());
        }
        
        if (command === 'D' && rightStack.length !== 0) {
            leftStack.push(rightStack.pop());
        }
        
        if (command === 'B' && leftStack.length !== 0) {
            leftStack.pop();
        }
        
        if (command === 'P') {
            leftStack.push(aux);
        }
    })
    
    const result = leftStack.join('') + rightStack.reverse().join('');
    console.log(result);
}

solution(string, m, commands);



// <처음 푼 방식>
// const fs = require('fs');
// // let input = fs.readFileSync('input.txt').toString().trim();
// let input = fs.readFileSync('/dev/stdin').toString().trim();
// input = input.split('\n');

// let string = input[0];
// let m = Number(input[1]);
// input.splice(0, 2);

// function solution(string, m, commands) {
//     let cursor = string.length;
    
//     commands.forEach((element, index) => {
//         const [command, str] = element.split(' ');
//         if (command === 'L') {
//             if (cursor !== 0) {
//                 cursor -= 1;
//             }
//         }
        
//         if (command === 'D') {
//             if (cursor !== string.length) {
//                 cursor += 1;
//             }
//         }
        
//         if (command === 'B') {
//             if (cursor !== 0) {
//                 // string[cursor - 1] 삭제
//                 const left = string.slice(0, cursor - 1);
//                 const right = string.slice(cursor);
//                 string = left + right;
                
//                 cursor -= 1;
//             }
//         }
        
//         if (command === 'P') {
//             const left = string.slice(0, cursor) + str;
//             const right = string.slice(cursor);
            
//             string = left + right;
            
//             cursor += 1;
//         }
//     })
    
//     console.log(string);
// }

// solution(string, m, input);