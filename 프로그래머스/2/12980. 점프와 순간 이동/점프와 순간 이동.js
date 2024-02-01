function solution(n)
{
    let count = 0, current = n;

    while (current > 0) {
        while (current % 2 === 0)
            current /= 2;
        count += 1;
        current -= 1;
    }
    return count;
}