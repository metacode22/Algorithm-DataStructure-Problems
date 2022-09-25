var isPalindrome = function(s) {
    const regEx = /^[0-9a-zA-Z]+$/;
    const sArray = Array.from(s.toLowerCase()).filter(string => string !== ' ' && string.match(regEx));
    let left = 0;
    let right = sArray.length - 1;
    
    while(left < right) {
        if (sArray[left] !== sArray[right]) return false;
        left += 1;
        right -= 1;
    }
    
    return true;
};