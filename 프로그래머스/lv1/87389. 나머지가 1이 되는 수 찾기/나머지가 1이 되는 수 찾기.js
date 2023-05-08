function solution(n) {
    var answer = 0;

    for (x = 2; x < n; x++) {
        if (parseInt(n % x) == 1) {
            answer += x;
            break ;
        }
    }
    return answer;
}