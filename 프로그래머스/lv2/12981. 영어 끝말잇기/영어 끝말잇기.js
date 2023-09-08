function solution(n, words) {
    const answer = [0,0];
    
    for (let i = 1; i < words.length; i++) {
        if (words.indexOf(words[i]) !== i 
            || (words[i - 1].split('').reverse().join()[0] != words[i][0])) {
            answer[0] = (i + 1) % n === 0 ? n : (i + 1) % n;
            answer[1] = Math.ceil((i + 1) / n);
            break;
        }
    }

    return answer;
}