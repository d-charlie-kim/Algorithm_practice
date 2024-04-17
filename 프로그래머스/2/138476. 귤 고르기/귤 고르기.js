function solution(k, tangerine) {
    let total = [], temp = [0,0];
    
    tangerine.sort((a,b) => a - b);
    for (let i = 0; i < tangerine.length; i++) {
        if (temp[0] !== tangerine[i]) {
            total.push(temp);
            temp = [tangerine[i], 1];
        }
        else
            temp[1] += 1;
    }
    total.push(temp);
    total.sort((a,b) => (b[1] - a[1]));

    let count = 0, sum = 0;
    for (let i = 0; i < total.length; i++) {
        if (sum >= k)
            break;
        sum += total[i][1];
        count += 1;
    }

    return count;
}