function solution(n) {
  const binaryN = ("0" + n.toString(2)).split("");
  let countZero = 1,
    flag = false;

  for (let i = binaryN.length - 1; i >= 0; i--) {
    if (flag && binaryN[i] === "0") {
      binaryN[i++] = "1";
      for (let j = 0; j < countZero; j++) {
        binaryN[i] = "0";
        i++;
      }
      break;
    }
    if (!flag && binaryN[i] === "1") {
      flag = true;
    }
    if (!flag && binaryN[i] === "0") {
      binaryN[i] = "1";
      countZero += 1;
    }
  }
  const answer = parseInt(binaryN.join(""), 2);
  return answer;
}