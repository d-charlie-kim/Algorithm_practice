function solution(n, lost, reserve) {
    let count = n - lost.length;
    lost.sort((a,b) => (a - b));
    reserve.sort((a,b) => (a - b));
    
    for (let i = 0; i < lost.length; i ++) {
        if (reserve.indexOf(lost[i]) !== -1) {
            count++;
            reserve[reserve.indexOf(lost[i])] = -10;
            lost[i] = -20;
        }
    }
    for (const x of lost) {
        if (reserve.indexOf(x - 1) !== -1) {
            count++;
            reserve[reserve.indexOf(x - 1)] = -10;
        }
        else if (reserve.indexOf(x + 1) !== -1) {
            count++;
            reserve[reserve.indexOf(x + 1)] = -10;
        }
    }
    return count;
}