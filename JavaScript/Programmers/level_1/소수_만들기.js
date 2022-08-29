let result = 0;

function isPrime(currentArray) {
    const sumNumber = currentArray.reduce((previous, current) => {
        return previous + current;
    })
    
    for (let i = 2; i <= Math.sqrt(sumNumber); i++) {
        if (sumNumber % i === 0) {
            return false;
        }
    }
    
    return true;
}

function DFS(nums, x, currentArray) {
    if (currentArray.length === 3) {
        if (isPrime(currentArray) === true) {
            result += 1;
        }
        return;
    }
    
    for (let i = x; i < nums.length; i++) {
        const newCurrentArray = [...currentArray];
        
        newCurrentArray.push(nums[i]);
        DFS(nums, i + 1, newCurrentArray);
    }
}

function solution(nums) {
    const newNums = [...nums];
    DFS(newNums, 0, new Array());
    
    return result;
}