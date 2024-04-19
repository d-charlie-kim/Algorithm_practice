function solution(n, left, right) {
    const answer = new Array(right - left + 1);

    let move = left;
    for (let i = 0; i <= right - left; i++) {
        answer[i] = Math.max(parseInt(move / n) + 1, move % n + 1);
        move++;
    }
    return answer;
}