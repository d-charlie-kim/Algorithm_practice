function solution(X, Y) {
  let answer = "";
  const arrX = X.split(""),
    arrY = Y.split("");

  for (let i = 9; i >= 0; i--) {
    answer += (i + "").repeat(
      Math.min(
        arrX.filter((num) => parseInt(num) === i).length,
        arrY.filter((num) => parseInt(num) === i).length
      )
    );
  }
  if (answer.length === 0)
    // 없을때
    return '-1';
  if (/^0+$/.test(answer))
    // 0으로만 이루어져있을때
    return '0';
  return answer;
}