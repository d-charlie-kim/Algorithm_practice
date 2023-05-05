function solution(order) {
    const stack = [];
    let stage = 0, top = 0;

    for (let i = 1; ; i++)
    {
        if (order[stage] == i)
            stage += 1;
        else if (top != 0 && order[stage] == stack[top - 1])
        {
            stage += 1;
            i -= 1;
            stack.pop();
            top -= 1;
        }
        else
        {
            if (i > order.length)
                break;
            top += 1;
            stack.push(i);
        }
    }
    return stage;
}