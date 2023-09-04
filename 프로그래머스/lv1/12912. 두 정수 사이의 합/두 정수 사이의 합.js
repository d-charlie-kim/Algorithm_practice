function summ(big, small) {
    let check = 0;
    while (small <= big) {
        check += small;
        small++;
    }
    return check;
}

function solution(a, b) {
    var answer = 0;
    if (a > b)
        answer = summ(a, b);
    else
        answer = summ(b, a);
    return answer;
}