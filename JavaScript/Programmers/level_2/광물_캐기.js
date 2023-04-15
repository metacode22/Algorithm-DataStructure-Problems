// 2023-04-15
function solution(picks, minerals) {
  const sum = picks.reduce((acc, curr) => acc + curr, 0);
  const newPicks = picks.slice();
  let result = Infinity;

  const DFS = currentPicks => {
    if (currentPicks.length === sum) {
      const newMinerals = minerals.slice();
      let fatigue = 0;
      currentPicks.forEach(currentPick => {
        let count = 5;

        while (newMinerals.length && count) {
          if (currentPick === 'diamond') fatigue += 1;

          if (currentPick === 'iron') {
            if (newMinerals[0] === 'diamond') fatigue += 5;
            else fatigue += 1;
          }

          if (currentPick === 'stone') {
            if (newMinerals[0] === 'diamond') fatigue += 25;
            if (newMinerals[0] === 'iron') fatigue += 5;
            if (newMinerals[0] === 'stone') fatigue += 1;
          }

          newMinerals.shift();
          count -= 1;
        }
      });

      if (fatigue < result) result = fatigue;
      return;
    }

    for (let i = 0; i < newPicks.length; i++) {
      if (newPicks[i]) {
        newPicks[i] -= 1;
        const nextPick = i === 0 ? 'diamond' : i === 1 ? 'iron' : 'stone';
        DFS([...currentPicks, nextPick]);
        newPicks[i] += 1;
      }
    }
  };

  DFS([]);

  return result;
}
