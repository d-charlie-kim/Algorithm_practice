function convertor(n) {
  let convertedN = "";
  while (n >= 3) {
    convertedN = (n % 3) + convertedN;
    n = parseInt(n / 3);
  }
  return n + convertedN;
}

function solution(n) {
  const convertedN = convertor(n);

  let answer = 0;
  for (let i = 0; i < convertedN.length; i++) {
    answer += convertedN[i] * Math.pow(3, i);
  }

  return answer;
}
