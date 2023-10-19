function count(wires, firstFrom, firstTo) {
  let count = 1;

  function counting(from, notTo) {
    for (const wire of wires) {
      if (wire[0] === from && wire[1] !== notTo) {
        count += 1;
        counting(wire[1], wire[0]);
      }
      if (wire[1] === from && wire[0] !== notTo) {
        count += 1;
        counting(wire[0], wire[1]);
      }
    }
  }

  counting(firstFrom, firstTo);
  return count;
}

function solution(n, wires) {
  let min = Number.MAX_SAFE_INTEGER;

  wires.forEach((wire) => {
    min = Math.min(
      min,
      Math.abs(count(wires, wire[0], wire[1]) - count(wires, wire[1], wire[0]))
    );
  });
  return min;
}