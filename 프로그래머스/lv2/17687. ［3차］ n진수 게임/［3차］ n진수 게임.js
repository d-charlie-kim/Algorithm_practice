function convertor(num, base) {
  const BASE = "0123456789ABCDEFG";
  let convertedN = "";

  while (num >= base) {
    convertedN = BASE[num % base] + convertedN;
    num = parseInt(num / base);
  }
  return BASE[num] + convertedN;
}

function solution(n, t, m, p) {
  let answer = "";
  let numbers = "";

  for (let decimal = 0; answer.length !== t; decimal++) {
    numbers += convertor(decimal, n);
    if (numbers.length < m) continue;

    while (answer.length !== t && numbers.length >= m) {
      answer += numbers[p - 1];
      numbers = numbers.slice(m);
    }
  }
  return answer;
}