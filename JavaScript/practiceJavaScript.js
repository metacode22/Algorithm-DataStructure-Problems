const array = Array.from({ length: 10 }, (_, index) => index + 1);
array[false] = 10;
array[10] = 1;
console.log(array.length);
console.log(array);
