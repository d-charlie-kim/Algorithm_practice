function solution(s)
{
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const last = stack.pop();
        if (!last)
            stack.push(s[i]);
        else if (last !== s[i])
            stack.push(last, s[i]);
    }
    if (stack.length)
        return 0;
    return 1;
}