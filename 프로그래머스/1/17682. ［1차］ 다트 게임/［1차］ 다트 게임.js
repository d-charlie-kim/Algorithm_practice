function solution(dartResult) {
  let scores = [0];
  const prizes = "OSDT";

  for (let i = 0; i < dartResult.length; ) {
    let currentValue = dartResult[i++];

    if (dartResult[i] === "0") {
      currentValue = 10;
      i++;
    }

    currentValue = Math.pow(currentValue, prizes.indexOf(dartResult[i++]));

    if (i < dartResult.length && dartResult[i] === "*") {
      scores[scores.length - 1] *= 2;
      currentValue *= 2;
      i++;
    } else if (i < dartResult.length && dartResult[i] === "#") {
      currentValue *= -1;
      i++;
    }

    scores.push(currentValue);
  }

  return scores.reduce((ac, cu) => {
    return ac + cu;
  }, 0);
}