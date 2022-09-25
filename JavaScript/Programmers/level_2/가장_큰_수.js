function solution(numbers) {
    let newNumbers = [...numbers].map(element => String(element));
    newNumbers.sort((a, b) => b + a - (a + b));

    //     if (newNumbers.every(element => element === '0')) {
    //         return '0';
    //     }

    //     return newNumbers.join('');

    if (newNumbers[0] === '0') {
        return '0';
    }

    return newNumbers.join('');
}
