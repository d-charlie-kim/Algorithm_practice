function solution(n) {
  const total = (n * (n + 1)) / 2;
  const answer = new Array(total);

  let i = 0,
    j = 0,
    step = 1;
  for (let count = n; count > 0; ) {
    for (let x = 0; x < count; x++) {
      i++;
      answer[(i * (i - 1)) / 2 + j] = step++;
    }
    count -= 1;
    for (let x = 0; x < count; x++) {
      j++;
      answer[(i * (i - 1)) / 2 + j] = step++;
    }
    count -= 1;
    for (let x = 0; x < count; x++) {
      i--;
      j--;
      answer[(i * (i - 1)) / 2 + j] = step++;
    }
    count -= 1;
  }
  return answer;
}