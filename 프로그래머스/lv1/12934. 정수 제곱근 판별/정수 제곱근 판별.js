function solution(n) {
    var answer = 0;

    if (Math.sqrt(n) == parseInt(Math.sqrt(n)))
        answer = Math.pow(parseInt(Math.sqrt(n) + 1), 2);
    else
        answer = -1;
    return answer;
}