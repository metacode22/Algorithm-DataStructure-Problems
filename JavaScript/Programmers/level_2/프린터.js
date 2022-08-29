function solution(priorities, location) {
    const newPriorities = [...priorities].map((value, index) => ({
        value: value,
        index: index
    }));
    let count = 0;
    
    while (newPriorities.length > 0) {
        const currentPriority = newPriorities.shift();
        const hasHigherPriority = newPriorities.some((element) => element.value > currentPriority.value);
        
        if (hasHigherPriority === true) {
            newPriorities.push(currentPriority);
        } else {
            count += 1;
            
            if (currentPriority.index === location) {
                return count;
            }
        }
    }
}