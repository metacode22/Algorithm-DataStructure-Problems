function solution(arr, divisor) {
    const result = new Array();

    arr.forEach(element => {
        if (element % divisor === 0) {
            result.push(element);
        }
    });

    result.sort((a, b) => a - b);

    if (result.length === 0) {
        return [-1];
    }

    return result;
}
