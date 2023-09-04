function solution(seoul) {
    var answer = "김서방은 ";

    for (let i in seoul) {
        if (seoul[i] == "Kim") {
            answer += i;
            break ;
        }
    }
    answer += "에 있다"
    return answer;
}