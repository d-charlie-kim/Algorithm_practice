function solution(n) {
    const nums = new Array(n + 1).fill(1);
    nums[0] = 0;
    nums[1] = 0;

    for (let i = 2; i <= n; i++) {
        for (let j = 2; i * j <= n; j++)
            nums[i * j] = 0;
    }

    const answer = nums.reduce((a,c) => a + c, 0);
    return answer;
}