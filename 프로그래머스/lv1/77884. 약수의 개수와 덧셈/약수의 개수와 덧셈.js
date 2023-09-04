function countMeasure(num) {
  let count = 1;

  for (let i = 1; i <= parseInt(num / 2); i++) {
    if (num % i === 0) count += 1;
  }

  if (count % 2 === 0) return true;
  return false;
}

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    if (countMeasure(i)) answer += i;
    else answer -= i;
  }
  return answer;
}

console.log(solution(13, 17));
