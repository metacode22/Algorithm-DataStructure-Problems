// 2023-01-23
function solution(d, budget) {
  const newD = [...d].sort((a, b) => a - b);
  let currentBudget = 0;
  let count = 0;

  newD.forEach(current => {
    if (currentBudget + current <= budget) {
      currentBudget += current;
      count += 1;
      return;
    }

    return;
  });

  return count;
}

// 그리디
function solution(d, budget) {
  let count = 0;
  let current = 0;
  const newD = [...d];
  newD.sort((a, b) => a - b);

  newD.forEach(element => {
    if (current + element <= budget) {
      current += element;
      count += 1;
    }
  });

  return count;
}

// DFS, 시간 초과 및 테스트 케이스 3번 실패
function sum(current) {
  let result;

  if (current.length !== 0) {
    result = current.reduce((prev, curr) => {
      return prev + curr;
    });
  }

  return result;
}

function DFS(newD, budget, current, index, result, count, visited) {
  const sumCurrent = sum(current);

  if (sumCurrent <= budget) {
    result.push(count);
  }

  for (let i = index; i < newD.length; i++) {
    if (visited[i] === 0) {
      visited[i] = 1;
      DFS(newD, budget, [...current, newD[i]], index + 1, result, count + 1, visited);
      visited[i] = 0;
    }
  }
}

function solution(d, budget) {
  const result = new Array();
  const newD = [...d];
  const visited = new Array(d.length).fill(0);

  DFS(newD, budget, [], 0, result, 0, visited);

  return Math.max(...result);
}
