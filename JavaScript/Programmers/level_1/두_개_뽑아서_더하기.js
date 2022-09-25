function solution(numbers) {
    let result = new Set();

    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            result.add(numbers[i] + numbers[j]);
        }
    }

    result = Array.from(result);
    result.sort((a, b) => a - b);

    return result;
}
