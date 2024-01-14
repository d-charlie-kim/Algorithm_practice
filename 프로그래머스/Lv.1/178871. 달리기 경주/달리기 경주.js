function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function solution(players, callings) {
    const rankMap = new Map();
    players.forEach((el, index) => {
        rankMap.set(el, index);
    })

    for (const name of callings) {
        const rank = rankMap.get(name);
        rankMap.set(name, rank - 1);
        rankMap.set(players[rank - 1], rank);
        swap(players, rank, rank - 1);
    }
    return players;
}