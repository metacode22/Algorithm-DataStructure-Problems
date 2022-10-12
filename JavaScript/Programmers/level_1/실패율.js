function solution(N, stages) {
  let currentPeople = stages.length;
  let result = new Array();

  for (let i = 1; i <= N; i++) {
    let init = [...stages];
    stages = stages.filter(element => element > i);

    result.push([(init.length - stages.length) / init.length, i]);
  }

  result.sort((a, b) => b[0] - a[0]);
  result = result.flat();

  let newResult = new Array();

  for (let i = 1; i < result.length; i += 2) {
    newResult.push(result[i]);
  }

  return newResult;
}
