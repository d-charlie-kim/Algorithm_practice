function greatestCommonDivisor(a, b) {
  let max = 0;

  for (let i = 1; i <= parseInt(Math.max(a, b) / 2); i++) {
    if (a % i === 0 && b % i === 0) max = i;
  }
  return max;
}

function solution(n, m) {
  const answer = [];

  answer.push(greatestCommonDivisor(n, m));
  answer.push(parseInt((n * m) / answer[0]));
  return answer;
}

/*
//NOTE

두 수의 곱 = 두 수의 최소 공배수 * 두 수의 최대 공약수

그래서 둘 중 하나만 구해도 다른 것을 쉽게 구할 수 있다.
*/
