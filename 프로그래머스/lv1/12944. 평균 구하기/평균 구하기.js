function solution(arr) {
    var answer = 0;
    for (x of arr) {
        answer += x;
    }
    answer /= arr.length;
    return answer;
}