function solution(num) {
    var answer = 0;

    for (; num != 1 && answer != 500; answer++) {
        if (parseInt(num % 2) == 0)
            num = parseInt(num / 2);
        else
            num = (num * 3) + 1;
    }
    if (answer == 500)
        answer = -1;
    return answer;
}