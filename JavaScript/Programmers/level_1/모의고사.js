// 2023.01.03.
function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let oneCount = 0;
  let twoCount = 0;
  let threeCount = 0;

  answers.forEach((answer, index) => {
    if (answer === one[index % one.length]) oneCount += 1;
    if (answer === two[index % two.length]) twoCount += 1;
    if (answer === three[index % three.length]) threeCount += 1;
  });

  const result = [];
  const maxCount = Math.max(oneCount, twoCount, threeCount);

  if (maxCount) {
    if (maxCount === oneCount) result.push(1);
    if (maxCount === twoCount) result.push(2);
    if (maxCount === threeCount) result.push(3);
  }

  return result;
}

function check(person, answers) {
  let result = 0;

  for (let i = 0; i <= answers.length; i++) {
    if (answers[i] === person[i % person.length]) {
      result += 1;
    }
  }

  return result;
}

function solution(answers) {
  const result1 = check([1, 2, 3, 4, 5], answers);
  const result2 = check([2, 1, 2, 3, 2, 4, 2, 5], answers);
  const result3 = check([3, 3, 1, 1, 2, 2, 4, 4, 5, 5], answers);

  const maxValue = Math.max(result1, result2, result3);
  const result = new Array();

  [result1, result2, result3].forEach((element, index) => {
    if (maxValue === element) {
      result.push(index + 1);
    }
  });

  return result;
}
