function solution(s) {
    s = s.toLowerCase();
    let pCount = 0;
    let yCount = 0;
    
    const sArray = Array.from(s);
    sArray.forEach((element) => {
        if (element === 'p') {
            pCount += 1;
        }
        
        if (element === 'y') {
            yCount += 1;           
        }
    })
    
    return pCount === yCount;
}