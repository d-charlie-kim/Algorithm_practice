function solution(record) {
  const order = [];
  const idStorage = {};
  const commentStorage = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };
  record.forEach((el) => {
    const msg = el.split(" ");
    if (msg[0] === "Enter") {
      order.push([msg[1], msg[0]]);
      idStorage[msg[1]] = msg[2];
    }
    if (msg[0] === "Leave") {
      order.push([msg[1], msg[0]]);
    }
    if (msg[0] === "Change") {
      idStorage[msg[1]] = msg[2];
    }
  });
  const answer = order.map((record) => {
    return idStorage[record[0]] + commentStorage[record[1]];
  });
  return answer;
}