function solution(N, stages) {
  const data = [],
    totalPlayers = stages.length;

  stages.sort((a, b) => a - b);

  for (let stage = 1; stage <= N; stage++) {
    const stagePlayers = totalPlayers - stages.indexOf(stage);
    const notClearPlayers =
      stages.indexOf(stage) === -1
        ? 0
        : stages.lastIndexOf(stage) - stages.indexOf(stage) + 1;

    data.push([stage, notClearPlayers / stagePlayers]);
  }

  data.sort((a, b) => {
    return b[1] - a[1];
  });
  const answer = data.map((record) => record[0]);
  return answer;
}