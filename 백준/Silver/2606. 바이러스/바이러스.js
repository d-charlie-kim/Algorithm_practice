const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const [N, lineCount, ...rest] = input.split("\n");
const line = rest.map((el) => el.split(" ").map(Number));
const visited = new Set();

const queue = [1];
visited.add(1);
while (queue.length) {
    const comNum = queue.shift();
    for (const [from, to] of line) {
        if (from === comNum && !visited.has(to)) {
            queue.push(to);
            visited.add(to);
        }
        if (to === comNum && !visited.has(from)) {
            queue.push(from);
            visited.add(from);
        }
    }
}
console.log(visited.size - 1);