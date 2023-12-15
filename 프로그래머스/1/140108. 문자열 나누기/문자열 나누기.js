function solution(s) {
  let answer = 0;
  let charx,
    count = 0;

  for (const char of s) {
    if (count == 0) {
      answer += 1;
      count += 1;
      charx = char;
    } else {
      if (charx == char) count += 1;
      else count -= 1;
    }
  }

  return answer;
}