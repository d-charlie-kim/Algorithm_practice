function recursive(stamina, been, to, dungeons, count) {
    if (to >= dungeons.length)
        return count;
    if (been.indexOf(to) !== -1 || stamina < dungeons[to][0]) {
        return recursive(stamina, been, to + 1, dungeons, count);
    }
    return Math.max(recursive(stamina - dungeons[to][1], been + to, 0, dungeons, count + 1), recursive(stamina, been, to + 1, dungeons, count));
}

function solution(k, dungeons) {
    let answer = -1;
    
    for (let i = 0; i < dungeons.length; i++) {
        if (k >= dungeons[i][0]) {
            answer = Math.max(answer, recursive(k - dungeons[i][1], i + '', 0, dungeons, 1));
        }
    }
    return answer;
}