function convertor(s) {
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if ((i + 1) % 2 !== 0) {
           arr.push(s[i].toUpperCase()); 
        }
        else {
            arr.push(s[i].toLowerCase());
        }
    }
    return (arr.join(''));
}

function solution(s) {
    let answer = '';
    const arr = s.split(' ');
    for (let i = 0; i < arr.length; i++) {
        answer += convertor(arr[i]);
        if (i !== arr.length - 1)
            answer += ' ';
    }
    return answer;
}