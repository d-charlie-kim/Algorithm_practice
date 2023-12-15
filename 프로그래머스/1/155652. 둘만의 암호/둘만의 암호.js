function solution(s, skip, index) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const code = alpha.split('').filter((char) => skip.indexOf(char) === -1)
    const len = code.length;

    const answer = s.split('').map((char, i) => {
        const newIndex = code.indexOf(char) + index;
        return code[newIndex % len];
    })

    return answer.join('');
}