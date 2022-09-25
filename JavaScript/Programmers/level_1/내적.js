function solution(a, b) {
    return a.reduce((acc, value, index) => acc + value * b[index], 0);
}
