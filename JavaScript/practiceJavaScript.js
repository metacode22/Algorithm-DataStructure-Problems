function solution(cap, n, deliveries, pickups) {
    const newDeliveries = [...deliveries];
    const newPickups = [...pickups];
    let initDeliver = 0;

    for (let i = n - 1; i >= 0; i--) {
        if (initDeliver + newDeliveries[i] <= cap) {
            initDeliver += newDeliveries[i];
        } else {
            break;
        }
    }

    const currentDeliver = initDeliver;
    const currentCollect = 0;
    let index = n - 1;
    let distance = 0;

    while (true) {
        // go
        distance += index + 1;

        // back
        for (let i = index; i >= 0; i--) {
            if (initDeliver )

            // distance += 1;
        }
    }
}

