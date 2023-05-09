function recursive(a, b, n) {
    if (n < a)
        return 0;  // 남은 병은 남은 병일뿐
    
    let restB = n % a;  // 남은 병
    let newB = parseInt(n / a) * b;  // 새로 받은 병
    return (newB + recursive(a, b, restB + newB));  // 새로 받은 병 + (남은 병 + 새로 받은 병) 으로 다시 받을 병
}

function solution(a, b, n) {
    const answer = recursive(a, b, n);
    return answer;
}