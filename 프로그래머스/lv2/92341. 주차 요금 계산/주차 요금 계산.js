function getTime(from, to) {
  const start = from.split(":");
  const end = to.split(":");
  return (end[0] - start[0]) * 60 + (end[1] - start[1]);
}

function calculator(fees, time) {
  const defaultTime = fees[0],
    defaultFee = fees[1],
    extraTime = fees[2],
    extraFee = fees[3];
  if (time <= defaultTime) {
    return defaultFee;
  }
  return defaultFee + Math.ceil((time - defaultTime) / extraTime) * extraFee;
}

function solution(fees, records) {
  const storage = new Map(); // {key: 차량번호, value: {in: in 시간, time: 총 시간}}

  records.forEach((record) => {
    const parse = record.split(" ");

    if (parse[2] === "IN") {
      storage.set(parse[1], {
        in: parse[0],
        time: storage.get(parse[1]) ? storage.get(parse[1]).time : 0, // 처음 입차 : 두번째 이상 입차
      });
    } else {
      const time = getTime(storage.get(parse[1]).in, parse[0]);
      const previousTime = storage.get(parse[1]).time;
      storage.set(parse[1], {
        in: "23:59", // 초기화
        time: previousTime + time,
      });
    }
  });

  const sorted = [...storage].sort((a, b) => a[0] - b[0]); // map -> array & sort 한번에
  const answer = sorted.map((time) => {
    // 주차 요금 계산
    return calculator(fees, time[1].time + getTime(time[1].in, "23:59"));
  });
  return answer;
}
