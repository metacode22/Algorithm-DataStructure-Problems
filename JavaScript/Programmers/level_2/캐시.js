function solution(cacheSize, cities) {
    const cache = new Array();
    const newCities = [...cities].map(element => element.toLowerCase());
    let result = 0;
    
    newCities.forEach((element) => {
        let index;
        if ((index = cache.indexOf(element)) !== -1) {
            cache.splice(index, 1);
            cache.push(element);
            result += 1;
            
            return;
        }
        
        if (cache.length >= cacheSize) {
            cache.shift();
        }
        
        if (cacheSize !== 0) {
            cache.push(element);
        }
        
        result += 5;
    })
    
    return result;
}