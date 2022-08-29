function solution(id_list, report, k) {
    const result = new Object();
    const getReported = new Object();
    id_list.forEach((element) => {
        result[element] = 0;
        getReported[element] = new Array();
    })
    
    report.forEach((element) => {
        const [a, b] = element.split(' ');
        if (!getReported[b].includes(a)) {
            getReported[b].push(a);
        }
    })
    
    Object.keys(getReported).forEach((element) => {
        if (getReported[element].length >= k) {
            getReported[element].forEach((element2) => {
                result[element2] += 1;
            })
        }
    })
    
    return Object.values(result);
}