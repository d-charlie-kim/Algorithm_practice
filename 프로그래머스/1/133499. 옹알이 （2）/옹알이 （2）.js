function repeatException(word) {
  const except = ["ayaaya", "yeye", "woowoo", "mama"];

  for (const pro of except) {
    if (word.includes(pro)) return false;
  }
  return true;
}

function solution(babbling) {
  const pron = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    if (!repeatException(babbling[i])) continue; // 같은 발음 연속 두번 예외처리

    let word = babbling[i];
    for (let j = 0; j < 4; j++) {
      const regexp = new RegExp(`${pron[j]}`, "g");
      word = word.replace(regexp, " "); // 모두 ' ' 로 치환
    }

    if (word.trim() === "") count += 1;
  }
  return count;
}