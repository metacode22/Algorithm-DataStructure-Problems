function solution(a, b) {
    let result = 0;
    const start = a < b ? a : b;
    const end = a < b ? b : a;
    
    for (let currentNumber = start; currentNumber <= end; currentNumber++) {
        result += currentNumber;
    }
    
    return result;
}