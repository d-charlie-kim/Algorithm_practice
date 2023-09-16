function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) return a > b ? 1 : -1; // 같으면 문자열 사전 비교
    return a[n] > b[n] ? 1 : -1; // 다르면 해당 문자 비교
  });
}