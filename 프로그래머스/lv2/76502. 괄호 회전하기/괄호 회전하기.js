function is_right(str) {
    let stack = [];

    for (let x of str) {
        if (x == "(" || x == "{" || x == "[")
            stack.push(x);
        else if (x == ")" && stack[stack.length - 1] == "(")
            stack.pop();
        else if (x == "}" && stack[stack.length - 1] == "{")
            stack.pop();
        else if (x == "]" && stack[stack.length - 1] == "[")
            stack.pop();
        else
            return false;
    }
    if (stack.length != 0)
        return false;
    return true;
}

function solution(s) {
    var answer = 0;
    let arr = s.split('');

    for (let i = 0; i < s.length; i++) {
        if (is_right(arr))
            answer += 1;
        arr.push(arr[0]);
        arr.shift();
    }
    return answer;
}