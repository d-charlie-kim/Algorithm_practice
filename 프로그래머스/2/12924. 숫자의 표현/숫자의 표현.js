function solution(n) {
    if (n <= 2)
        return 1;

    let count = 0, first = 1, last = 2, sum = 3;
    while (first !== last) {
        if (sum < n) {
            last += 1;
            sum += last;
            continue;
        }
        if (sum > n) {
            sum -= first;
            first += 1;
            continue;
        }
        if (sum === n) {
            count += 1;
            last += 1;
            sum += (last - first);
            first += 1;
        }
    }
    return count + 1;
}