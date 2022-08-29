var isPerfectSquare = function(num) {
    let temp = num / 2;
    temp = parseInt(temp);
    
    for (let i = temp; i > 0; i--) {
        if (i * i === num) {
            return true
        }
    }
    
    return false;
};

const result = isPerfectSquare(1);
console.log(result);