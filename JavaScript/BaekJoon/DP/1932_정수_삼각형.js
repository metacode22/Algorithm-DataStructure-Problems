// DP 풀이, 한 단계 이전의 결과값 중 큰 것에 현재값을 더하면 되니 DP
// 현재값(graph[i][j])의 입장에서는 dp의 대각선 윗 왼쪽, 대각선 윗 오른쪽 값 2개 중 큰 것을 고르면 된다.
// 7
// 3 8
// 5 1 0
// 2 7 4 4
// 위의 예제를 생각해보자. 1은 10(7 + 3)과 15(7 + 8) 중 고르게 된다. 당연히 15를 고르는 것이 더 크게 만들 수 있다.
// 그러면 dp에서 1의 위치에는 16(15 + 1)이 되어 있을 것이다.
// 이제 7은 15와 16을 고르게 된다. 만약 이전에 15가 아니라 10을 선택했다면 17이 되버릴 것이다. 이는 23보다 확실히 낮은 값이다.
// 7 뒤의 4도 마찬가지이다.
// 즉 이렇게 가장 큰 값을 정하면서 오는 것이 맞다. 따라서 DP이다.
// 현재값이 현재에 처한 상황에서 고를 수 있는 경우의 수 중 가장 큰 값을 고르면 된다.
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0]);
const graph = input.slice(1).map(element => element.split(' ').map(element => Number(element)));

graph.forEach(element => {
  if (element.length < n) {
    currentElementLength = element.length;

    for (let i = 0; i < n - currentElementLength; i++) {
      element.push(0);
    }
  }
});

function solution(n, graph) {
  const dp = new Array();
  for (let i = 0; i < n; i++) {
    dp.push(new Array(n).fill(0));
  }

  dp[0][0] = graph[0][0];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + graph[i][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + graph[i][j];
      }
    }
  }

  return Math.max(...dp[dp.length - 1]);
}

const result = solution(n, graph);
console.log(result);

// // DFS 풀이, 메모리 초과 발생
// const fs = require('fs');
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
// let input = fs.readFileSync(filePath).toString().trim().split('\n');

// const n = Number(input[0]);
// const graph = input.slice(1).map(element => element.split(' ').map(element => Number(element)));

// graph.forEach((element) => {
//     if (element.length < n) {
//         currentElementLength = element.length

//         for (let i = 0; i < n - currentElementLength; i++) {
//             element.push(0);
//         }
//     }
// })

// function DFS(level, n, currentX, currentSum, newGraph, result) {
//     currentSum += newGraph[level][currentX];

//     if (level === n - 1) {
//         result.push(currentSum);

//         return;
//     }

//     DFS(level + 1, n, currentX, currentSum, newGraph, result);
//     DFS(level + 1, n, currentX + 1, currentSum, newGraph, result);
// }

// function solution(n, graph) {
//     const newGraph = [...graph];
//     const result = new Array();

//     DFS(0, n, 0, 0, newGraph, result);

//     return Math.max(...result);
// }

// const result = solution(n, graph);
// console.log(result);
