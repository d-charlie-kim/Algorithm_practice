function solution(n, m, section) {
  let answer = 0,
    current = 0;

  for (let i = 0; i < section.length; i++) {
    if (section[i] <= current) continue;
    answer += 1;
    current = section[i] + m - 1;
  }

  return answer;
}
