function solution(s) {
  // const alpha = "zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA";

  const answer = s.split("").sort().reverse().join("");
  return answer;
}
