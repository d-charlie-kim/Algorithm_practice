function solution(ingredient) {
    let count = 0;
    let stack = [];

    for (const ingre of ingredient) {
        stack.push(ingre);

        if (stack.slice(-4).join('') === '1231') {
            count += 1;
            stack.pop();
            stack.pop();
            stack.pop();
            stack.pop();
        }
    }
    return count;
}
