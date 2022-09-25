function solution(brown, yellow) {
    for (let height = 3; height <= brown; height++) {
        if ((brown + yellow) % height === 0) {
            const width = (brown + yellow) / height;

            if ((width - 2) * (height - 2) === yellow) {
                return [width, height];
            }
        }
    }
}
