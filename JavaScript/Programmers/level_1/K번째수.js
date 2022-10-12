function solution(array, commands) {
  const newArray = [...array];
  const result = new Array();

  commands.forEach(element => {
    const currentArray = [...newArray].slice(element[0] - 1, element[1]).sort((a, b) => a - b);
    result.push(currentArray[element[2] - 1]);
  });

  return result;
}
