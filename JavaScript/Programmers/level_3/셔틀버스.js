function solution(n, t, m, timetable) {
  const sortedTimeTable = [...timetable]
    .map(time => {
      const [hour, minute] = time.split(':').map(stringTime => parseInt(stringTime, 10));
      return hour * 60 + minute;
    })
    .sort((a, b) => a - b);
  const startBusTime = 9 * 60;
  let currentCrew = 0;
  let result;

  for (let i = 0; i < n; i++) {
    const currentBusTime = startBusTime + t * i;
    let count = 0;

    for (let j = 0; j < m; j++) {
      if (sortedTimeTable[currentCrew] && sortedTimeTable[currentCrew] <= currentBusTime) {
        currentCrew += 1;
        count += 1;
      }
    }

    if (i === n - 1 && count === m) {
      result = sortedTimeTable[currentCrew - 1] - 1;
    } else {
      result = currentBusTime;
    }
  }

  const resultHour = String(parseInt(result / 60, 10)).padStart(2, '0');
  const resultMinute = String(result % 60).padStart(2, '0');
  return `${resultHour}:${resultMinute}`;
}
