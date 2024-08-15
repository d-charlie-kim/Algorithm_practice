function dfs(idx, visited, computers) {
  const queue = [idx];

  while (queue.length) {
    const newCom = queue.shift();
    computers[newCom].forEach((el, i) => {
      if (el === 1 && i !== newCom && !visited.has(i)) {
        queue.push(i);
        visited.add(i);
      }
    });
  }
}

function solution(n, computers) {
  const visited = new Set();
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      count += 1;
      visited.add(i);
      dfs(i, visited, computers);
    }
  }
  return count;
}
