function solution(n) {
    let fibonachi = [0,1];

    for (let i = 2; i <= n; i++) {
        fibonachi[i] = (fibonachi[i - 2] + fibonachi[i - 1]) % 1234567;
    }
    return fibonachi[n];
}