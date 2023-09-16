function change(numbers, s) {
  let str = s;

  for (let i = 0; i < numbers.length; i++) {
    let regexp = new RegExp(numbers[i], "g");
    str = str.replace(regexp, i + "");
  }
  return parseInt(str);
}

function solution(s) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const answer = change(numbers, s);
  return answer;
}
