function solution(my_string) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    let answer = '';
    
    for (let x of my_string) {
        let index = upper.indexOf(x);
        if (index !== -1)
            answer += lower[index];
        else
            answer += upper[lower.indexOf(x)];
    }
    return answer;
}