function solution(d, budget) {
  d.sort((a, b) => a - b);

  let answer = 0;
  for (const x of d) {
    if (x <= budget) {
      budget -= x;
      answer += 1;
    }
  }
  return answer;
}
