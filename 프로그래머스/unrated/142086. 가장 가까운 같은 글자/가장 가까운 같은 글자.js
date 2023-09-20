function solution(str) {
  const history = {};
  const answer = [];

  str.split("").forEach((alpha, idx) => {
    if (Object.keys(history).includes(alpha)) {
      answer.push(idx - history[alpha]);
      history[alpha] = idx;
    } else {
      answer.push(-1);
      history[alpha] = idx;
    }
  });
  return answer;
}