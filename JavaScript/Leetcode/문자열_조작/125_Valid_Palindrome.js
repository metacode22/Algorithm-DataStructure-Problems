var isPalindrome = function(s) {
    let result = s;
    result = result.toLowerCase();
    result = result.split('');
    result = result.filter(element => /[a-z0-9]/.test(element));
    result = result.join('');
    
    let left = 0;
    let right = result.length - 1;
    
    while (left < right) {
        if (result[left] !== result[right]) {
            return false;
        }
        
        left += 1;
        right -= 1;
    }
    
    return true;
};