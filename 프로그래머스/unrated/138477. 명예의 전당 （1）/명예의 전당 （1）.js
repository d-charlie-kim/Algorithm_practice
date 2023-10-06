function solution(k, score) {
  const stage = [];
  const answer = [];

  for (const num of score) {
    if (stage.length < k) {
      stage.push(num);
    } else if (stage[0] < num) {
      stage.shift();
      stage.push(num);
    }
    stage.sort((a, b) => a - b);
    answer.push(stage[0]);
  }
  return answer;
}