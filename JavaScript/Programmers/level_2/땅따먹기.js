function solution(land) {
  const newLands = [...land];
  
  newLands.forEach((land, index) => {
      if (index === 0) return;
      
      const lastLand = newLands[index - 1];
      newLands[index][0] = Math.max(lastLand[1], lastLand[2], lastLand[3]) + newLands[index][0]
      newLands[index][1] = Math.max(lastLand[0], lastLand[2], lastLand[3]) + newLands[index][1]
      newLands[index][2] = Math.max(lastLand[0], lastLand[1], lastLand[3]) + newLands[index][2]
      newLands[index][3] = Math.max(lastLand[0], lastLand[1], lastLand[2]) + newLands[index][3]
  })
  
  return Math.max(...newLands[newLands.length - 1]);
}