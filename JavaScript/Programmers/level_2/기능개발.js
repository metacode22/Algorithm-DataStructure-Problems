// 2023-02-03
function solution(progresses, speeds) {
  const result = [];

  while (progresses.length) {
    progresses.forEach((progress, index) => {
      progresses[index] = progress + speeds[index];
    });

    let count = 0;
    while (progresses.length && progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count += 1;
    }

    if (count !== 0) {
      result.push(count);
    }
  }

  return result;
}

function solution(progresses, speeds) {
  const result = new Array();
  const newProgresses = [...progresses];
  const newSpeeds = [...speeds];

  while (newProgresses.length > 0) {
    newProgresses.forEach((progress, index) => (newProgresses[index] = progress + newSpeeds[index]));

    let count = 0;
    while (newProgresses[0] >= 100) {
      count += 1;
      newProgresses.shift();
      newSpeeds.shift();
    }

    if (count !== 0) result.push(count);
  }

  return result;
}
