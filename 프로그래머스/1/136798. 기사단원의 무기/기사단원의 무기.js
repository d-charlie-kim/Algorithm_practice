function solution(number, limit, power) {
  const countArr = new Array(number + 1).fill(0);

  for (let i = 1; i <= number; i++) {
    for (let j = 1; i * j <= number; j++) {
      countArr[i * j] += 1;
    }
  }
  const answer = countArr.reduce((ac, cu) => {
    return ac + (cu > limit ? power : cu);
  }, 0);
  return answer;
}