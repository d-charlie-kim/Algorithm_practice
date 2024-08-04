function solution(priorities, location) {
    const queue = [...priorities.map(Number)];
    const printNum = queue[location];
    let max = Math.max(...queue);
    let count = 0;

    while (queue.length > 0) {
        if (queue[0] === max) {
            count += 1;
            queue.shift();
            if (location === 0) {
                break;
            }
            location -= 1;
            max = Math.max(...queue);
        }
        if (queue[0] < max) {
            queue.push(queue.shift());
            location = location === 0 ? queue.length - 1 : location - 1;
        }
    }
    return count;
}