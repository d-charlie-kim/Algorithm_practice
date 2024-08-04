function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    const storage = [];

    prices.forEach((price, idx) => {
        while (storage.length > 0 && storage[storage.length - 1][0] > price) {
            answer[storage[storage.length - 1][1]] = idx - storage[storage.length - 1][1];
            storage.pop();
        }
        storage.push([price, idx]);
    });
    while (storage.length > 0) {
        answer[storage[storage.length - 1][1]] = prices.length - storage[storage.length - 1][1] - 1;
            storage.pop();
    }
    return answer;
}