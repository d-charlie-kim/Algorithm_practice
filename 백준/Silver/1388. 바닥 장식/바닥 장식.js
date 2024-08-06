const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const [info, ...rest] = input.split("\n");
const [N, M] = info.split(" ").map(Number);
const floor = rest.map((el) => el.split(""));
const directionsX = [[0, 1], [0, -1]];
const directionsY = [[1, 0], [-1, 0]];

const queue = [];
let count = 0;
for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
        let shape = floor[x][y];
        if (floor[x][y] !== 0) {
            queue.push([x,y]);
            count += 1;
        }
        while (queue.length) {
            const [currentX, currentY] = queue.shift();
            floor[currentX][currentY] = 0;
            const directs = shape === '-' ? directionsX : directionsY;

            for (const [dx, dy] of directs) {
                const [newX, newY] = [currentX + dx, currentY + dy];
                if (newX >= 0 && newX < N && newY >= 0 && newY < M && floor[newX][newY] === shape) {
                    queue.push([newX, newY]);
                }
            }
        }
    }
}
console.log(count);