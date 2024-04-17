function solution(n) {
    let answer = 0;
    let dp1 = 1, dp2 = 2;

    if (n === 1)
        return 1;
    if (n === 2)
        return 2;
    for (let i = 3; i <= n; i++) {
        answer = (dp1 + dp2) % 1234567;
        dp1 = dp2;
        dp2 = answer;
    }

    return answer;
}