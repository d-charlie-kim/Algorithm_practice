const wordLst = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function solution(msg) {
  const answer = [];
  let word = "";
  let oldIndex = -1;

  for (let i = 0; i < msg.length; ) {
    word += msg[i];

    let index = wordLst.indexOf(word);
    if (index === -1) {
      wordLst.push(word);
      answer.push(oldIndex + 1);
      word = "";
      i -= 1;
    } else {
      oldIndex = index;
    }
    i += 1;
  }
  answer.push(oldIndex + 1);

  return answer;
}