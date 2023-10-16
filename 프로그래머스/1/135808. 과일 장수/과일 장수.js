function solution(k, m, score) {
  score.sort((a, b) => b - a);

  let answer = 0;
  for (let i = m - 1; i < score.length; ) {
    answer += score[i] * m;
    i += m;
  }
  return answer;
}