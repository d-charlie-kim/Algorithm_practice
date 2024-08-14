const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const [n, goal, m, ...rest] = input.split("\n");
const [from, to] = goal.split(" ");
const fromParent = new Map();
const fromChild = new Map();
rest.forEach((el) => {
  const [parent, child] = el.split(" ");
  if (!fromParent.has(parent)) {
    fromParent.set(parent, []);
  }
  if (!fromChild.has(child)) {
    fromChild.set(child, []);
  }
  fromParent.get(parent).push(child);
  fromChild.get(child).push(parent);
});

function bfs(start, target) {
  const queue = [[start, 0]];
  const visited = new Set();

  while (queue.length > 0) {
    const [person, count] = queue.shift();

    if (person === target) {
      return count;
    }

    if (!visited.has(person)) {
      visited.add(person);

      if (fromParent.has(person)) {
        fromParent.get(person).forEach(child => {
          queue.push([child, count + 1]);
        });
      }

      if (fromChild.has(person)) {
        fromChild.get(person).forEach(parent => {
          queue.push([parent, count + 1]);
        });
      }
    }
  }
  
  return -1;  // 경로가 없는 경우
}

const minCount = bfs(from, to);
console.log(minCount);