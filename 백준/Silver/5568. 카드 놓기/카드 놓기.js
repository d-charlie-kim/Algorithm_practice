const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = [parseInt(input[0]), parseInt(input[1])];
const nums = input.slice(2);
const set = new Set();

for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
        if (k === 2 && a !== b) {
            set.add(nums[a] + nums[b]);
        }
        for (let c = 0; k > 2 && c < n; c++) {
            if (k === 3 && a !== b && a !== c && b !== c) {
                set.add(nums[a] + nums[b] + nums[c]);
            }
            for (let d = 0; k > 3 && d < n; d++) {
                if (k === 4 && a !== b && a !== c && a !== d && b !== c && b !== d && c !== d)
                    set.add(nums[a] + nums[b] + nums[c] + nums[d]);
            }
        }
    }
}
const answer = set.size;
console.log(answer);