function solution(a, b) {
    const months = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const days = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    let totalDays = 0;

    for (let i = 0; i < a; i++) {
        totalDays += months[i];
    }

    totalDays += b;

    return days[totalDays % 7];
}
