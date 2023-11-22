function solution(lottos, win_nums) {
  const prize = [6, 6, 5, 4, 3, 2, 1];
  let zeroCount = lottos.filter((num) => num === 0).length;
  const currentWin = lottos.filter((num) => win_nums.includes(num)).length;

  const answer = [prize[currentWin + zeroCount], prize[currentWin]];
  return answer;
}