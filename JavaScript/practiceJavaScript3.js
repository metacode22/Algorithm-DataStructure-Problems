// 명령형
// 하나하나 다 로직을 구현하여 넣었다.
// result라는 배열에 for문을 돌려서 * 2해서...
// 즉 어떻게 처리해야 하는지에 대한 것이 묘사되어 있다.
function double(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // 명령형에서 이렇게 예외 상황을 처리하기 위해 무언가 더 추가하게 되면 코드가 복잡해지면서 후에 유지보수하기 어려워진다.
    if (typeof arr[i] === 'number') {
      result.push(arr[i] * 2);
    }
  }

  return result;
}

// 선언형
// 많은 것이 함축되었다.
// 무엇을 원하는지에 대해 묘사되어 있다.
// 더 간결해졌다.
function double(arr) {
  // 새로운 요구사항이 들어왔을 때에도 단계가 잘 나뉘어지다보니 간단하게 추가할 수 있고, 다른 사람이 봤을 때에도 이해하기 쉽다.
  return arr.filter(number => typeof number === 'number')
            .map(number => number * 2);
}

console.log(double([1, 2, 3, 'a']));