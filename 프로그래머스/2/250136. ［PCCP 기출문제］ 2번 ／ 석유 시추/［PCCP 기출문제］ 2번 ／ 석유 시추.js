function bfs(x, y, land, areaIdx) {
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const queue = [[x, y]];
  let count = 1;
  land[x][y] = areaIdx;

  while (queue.length) {
    const [nowX, nowY] = queue.shift();
    directions.forEach((direction) => {
      const newX = direction[0] + nowX;
      const newY = direction[1] + nowY;

      if (
        newX >= 0 &&
        newX < land.length &&
        newY >= 0 &&
        newY < land[0].length &&
        land[newX][newY] === 1
      ) {
        count += 1;
        queue.push([newX, newY]);
        land[newX][newY] = areaIdx;
      }
    });
  }
  return count;
}

function solution(land) {
  const rowList = new Map();
  const areaSizes = new Map();

  let areaIdx = 2;
  for (let y = 0; y < land[0].length; y++) {
    for (let x = 0; x < land.length; x++) {
      if (!rowList.has(y)) {
        rowList.set(y, []);
      }
      if (
        land[x][y] !== 1 &&
        land[x][y] !== 0 &&
        !rowList.get(y).includes(land[x][y])
      ) {
        rowList.get(y).push(land[x][y]);
        continue;
      }

      if (land[x][y] === 1) {
        areaSizes.set(areaIdx, bfs(x, y, land, areaIdx));
        rowList.get(y).push(areaIdx);
        areaIdx += 1;
      }
    }
  }

  let maxCount = 0;
  for (const areas of rowList.values()) {
    const count = areas.reduce((ac, cu) => ac + areaSizes.get(cu), 0);
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
}
