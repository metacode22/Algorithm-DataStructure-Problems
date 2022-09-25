function isPrime(currentString) {
    const currentNumber = Number(currentString);

    if (currentNumber <= 1) {
        return false;
    }

    for (let i = 2; i <= parseInt(Math.sqrt(currentNumber)); i++) {
        if (currentNumber % i === 0) {
            return false;
        }
    }

    return true;
}

function DFS(currentValue, numbersArray, visited, result) {
    for (let i = 0; i < numbersArray.length; i++) {
        if (visited[i] === 0) {
            if (isPrime(currentValue + numbersArray[i]) === true) {
                result.add(Number(currentValue + numbersArray[i]));
            }
            visited[i] = 1;
            DFS(currentValue + numbersArray[i], numbersArray, visited, result);
            visited[i] = 0;
        }
    }
}

function solution(numbers) {
    const numbersArray = Array.from(numbers);
    const visited = new Array(numbersArray.length).fill(0);
    const result = new Set();

    DFS('', numbersArray, visited, result);
    console.log(result);

    return Array.from(result).length;
}
