function solution(s, n) {
  const smallAlpha = "abcdefghijklmnopqrstuvwxyz";
  const bigAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let answer = "";

  for (const el of s) {
    if (el === " ") answer += el;
    if (smallAlpha.indexOf(el) !== -1)
      answer += smallAlpha[(smallAlpha.indexOf(el) + n) % 26];
    if (bigAlpha.indexOf(el) !== -1)
      answer += bigAlpha[(bigAlpha.indexOf(el) + n) % 26];
  }
  return answer;
}