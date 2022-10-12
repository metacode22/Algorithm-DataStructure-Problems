// (h 입장에서) 얘도 나보다 크네? 더 커져도 되겠네 -> + 1
// 테스트 케이스 기준
// 여기서 h + 1은 index + 1로 즉 갯수이다.(논문 편수)
// 0 이상 인용된 논문이 0개 이상
// 1 이상 인용된 논문이 1개 이상
// 2 이상 인용된 논문이 2개 이상
// 3 이상 인용된 논문이 3개 이상
// 4 이상 인용된 논문이 4개 이상이 아니게 됨...
function solution(citations) {
  const newCitations = [...citations].sort((a, b) => b - a);
  let h = 0;

  while (h + 1 <= newCitations[h]) {
    h += 1;
  }

  return h;
}

// 처음 질문하기에서 반례 몇 개 보고 맞춘 것.
function solution(citations) {
  const newCitations = [...citations].sort((a, b) => a - b);
  const average = parseInt(newCitations.reduce((acc, value) => acc + value, 0) / newCitations.length);
  let averageRight = average;
  let averageLeft = average;
  let maxH = 0;

  function isH(average) {
    let above = 0;

    for (let i = 0; i < newCitations.length; i++) {
      if (average <= newCitations[i]) above += 1;
    }

    return above >= average;
  }

  while (averageRight <= newCitations[newCitations.length - 1]) {
    if (isH(averageRight)) {
      if (averageRight > maxH) {
        maxH = averageRight;
      }
    }

    averageRight += 1;
  }

  while (averageLeft >= 0) {
    if (isH(averageLeft)) {
      if (averageLeft > maxH) {
        maxH = averageLeft;
      }
    }

    averageLeft -= 1;
  }

  return maxH;
}
