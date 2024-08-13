function solution(land) {
  const dfs = (i, j, positions) => {
    const stack = [[i, j]];
    let cnt = 0;
    
    while (stack.length) {
      const [x, y] = stack.pop();
      
      if (x < 0 || x >= land.length || y < 0 || y >= land[x].length || land[x][y] !== 1) {
        continue;
      }
      
      land[x][y] = 0;
      cnt += 1;
      positions.add(y);
      
      stack.push([x + 1, y]);
      stack.push([x - 1, y]);
      stack.push([x, y + 1]);
      stack.push([x, y - 1]);
    }
    
    return cnt;
  };

  const cnts = new Map();
  land.forEach((row, i) => {
    row.forEach((item, j) => {
      if (item === 1) {
        const positions = new Set();
        const cnt = dfs(i, j, positions);
        
        for (let j of positions) {
          cnts.set(j, (cnts.get(j) || 0) + cnt);
        }
      } 
    });
  });

  return Math.max(...cnts.values()) || 0;
}