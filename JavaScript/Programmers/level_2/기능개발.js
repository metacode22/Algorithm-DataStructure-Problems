function solution(progresses, speeds) {
    const result = new Array();
    const newProgresses = [...progresses];
    const newSpeeds = [...speeds];

    while (newProgresses.length > 0) {
        newProgresses.forEach((progress, index) => (newProgresses[index] = progress + newSpeeds[index]));

        let count = 0;
        while (newProgresses[0] >= 100) {
            count += 1;
            newProgresses.shift();
            newSpeeds.shift();
        }

        if (count !== 0) result.push(count);
    }

    return result;
}
