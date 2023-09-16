function calculator(n, numA, numB) {
  let line = "";
  const first = numA.toString(2).padStart(n, "0");
  const second = numB.toString(2).padStart(n, "0");

  for (let i = 0; i < n; i++) {
    if (first[i] === "1" || second[i] === "1") line += "#";
    else line += " ";
  }
  return line;
}

function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    answer.push(calculator(n, arr1[i], arr2[i]));
  }
  return answer;
}