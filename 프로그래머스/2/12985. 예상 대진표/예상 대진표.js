function solution(n,a,b)
{
    let count = 1, big = Math.max(a,b), small = Math.min(a,b);
    while (true) {
        const half = n / 2;
        if (small <= half && big > half) {
            while (n > 2) {
                n /= 2;
                count += 1;
            }
            return count;
        }
        else if (small > half) {
            small -= half;
            big -= half;
        }
        n /= 2;
    }
}