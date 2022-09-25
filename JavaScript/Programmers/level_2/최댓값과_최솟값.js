function solution(s) {
    const newS = s
        .split(' ')
        .map(string => Number(string))
        .sort((a, b) => a - b);

    return `${newS[0]} ${newS[newS.length - 1]}`;
}
