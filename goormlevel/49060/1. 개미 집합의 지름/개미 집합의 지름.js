// Run by Node.js
const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });
    
    const input = [];
    for await (const line of rl) {
        input.push(line);
        if (input.length === 2) {
            rl.close();
            break;
        }
    }
    
    const [N, D] = input[0].split(' ').map(Number);
    const nums = input[1].split(' ').map(Number);
    nums.sort((a,b) => a - b);
    
    if (N === 1) {
        console.log(0);
        process.exit();
    }
    
    let max = 1, big = 0;
    let i = 0, j = 1;
    while (j < N) {
        big = nums[j] - nums[i];
        if (big <= D) {
            max = Math.max(max, j - i + 1);
            j++;
        } else {
            i++;
            if (i === j) j++;
        }
    }
    console.log(N - max);
    process.exit();
})();