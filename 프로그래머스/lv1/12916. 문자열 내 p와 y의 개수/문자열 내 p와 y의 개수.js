function solution(s){
    var answer = true;
    let check = 0;

    for (let x of s) {
        if (x == 'p' || x == 'P')
            check -= 1;
        else if (x == 'y' || x == 'Y')
            check += 1;
    }
    if (check != 0)
        answer = false;
    return answer;
}