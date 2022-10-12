function solution(bridge_length, weight, truck_weights) {
  const newTruckWeights = truck_weights.map((weight, index) => new Object({ id: index, weight: weight, distance: 0 }));
  const trucksOnBridge = new Array();

  trucksOnBridge.push(newTruckWeights[0]);

  let count = 0;
  let index = 1;

  while (trucksOnBridge.length > 0) {
    if (trucksOnBridge[0].distance >= bridge_length) {
      trucksOnBridge.shift();
    }

    trucksOnBridge.forEach(truck => {
      truck.distance += 1;
    });

    let currentWeightOnBridge = 0;
    trucksOnBridge.forEach(truck => {
      currentWeightOnBridge += truck.weight;
    });

    if (index !== newTruckWeights.length && currentWeightOnBridge + newTruckWeights[index].weight <= weight) {
      trucksOnBridge.push(newTruckWeights[index]);
      newTruckWeights[index].distance += 1;
      index += 1;
    }

    count += 1;
  }

  return count;
}
