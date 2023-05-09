function solution(n) {
    let answer = 1;
    for (let count = 1; count <= n; answer++)
        count = count * answer;
    return (answer - 2);
}