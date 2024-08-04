function solution(bridge_length, weight, truck_weights) {
    const queue = new Array(bridge_length).fill(0);
    
    let timer = 0;
    let currentWeight = 0;
    for (let i = 0; i < truck_weights.length || currentWeight > 0; ) {
        timer += 1;
        currentWeight -= queue.shift();
        if (currentWeight + truck_weights[i] <= weight) {
            const truck = truck_weights[i];
            queue.push(truck);
            currentWeight += truck;
            i++;
        }
        else {
            queue.push(0);
        }
    }
    return timer;
}
