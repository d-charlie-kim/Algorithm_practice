function solution(x) {
    var answer = true;
    let num = 0;
    let temp = x;
    while (temp > 0) {
        num += parseInt(temp % 10);
        temp = parseInt(temp / 10);
    }
    if (parseInt(x % num) != 0)
        answer = false;
    return answer;
}