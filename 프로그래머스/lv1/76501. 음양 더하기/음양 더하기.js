function solution(absolutes, signs) {
    var answer = 0;

    for (let i in absolutes) {
        if (!signs[i])
            absolutes[i] *= -1;
        answer += absolutes[i];
    }
    return answer;
}