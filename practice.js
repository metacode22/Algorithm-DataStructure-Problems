function deepCopy(obj) {
  if (Array.isArray(obj)) {
    // 만약 obj가 배열인 경우
    return obj.slice().map(deepCopy); // slice()로 새로운 배열 생성 후 map() 메서드를 사용하여 배열의 모든 요소를 재귀적으로 복사
  } else if (obj !== null && typeof obj === 'object') {
    // 만약 obj가 객체인 경우
    let result = {};
    for (let key in obj) {
      // 모든 속성 반복
      result[key] = deepCopy(obj[key]); // 속성을 재귀적으로 복사
    }
    return result;
  } else {
    // 그 외의 경우
    return obj;
  }
}

let originalObj = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'painting', 'swimming'],
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: {
      real: '10001',
    },
  },
};

let copiedObj = deepCopy(originalObj);

copiedObj.address.zip.real = '222';
console.log(originalObj);
console.log(copiedObj);
