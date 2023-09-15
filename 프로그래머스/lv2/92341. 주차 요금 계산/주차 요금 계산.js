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

function getTime(from, to) {
  const start = from.split(":");
  const end = to.split(":");
  return (end[0] - start[0]) * 60 + (end[1] - start[1]);
}

function solution(fees, records) {
  const storage = new Map(); // key: 차량 번호, value: 입차 시간
  const timeRecord = new Map(); // key: 차량 번호, value: 계산될 총 시간

  for (const record of records) {
    const parse = record.split(" ");
    if (parse[2] === "IN") {
      // storage에 최초 입차 저장
      storage.set(parse[1], [parse[0]]);
    } else {
      // 출차일때
      const time = getTime(storage.get(parse[1])[0], parse[0]); // 지금 계산된 시간
      const previousTime = timeRecord.get(parse[1]); // 이전에 들어왔던적 있는가(그 시간)
      timeRecord.set(
        parse[1],
        previousTime === undefined ? time : time + previousTime
      );
      storage.delete(parse[1]);
    }
  }

  // --> timeRecord 에 차량번호와 시간으로 이루어진 map이 저장됨

  // 출차 안했을 경우 23:59으로 계산
  for (const record of storage) {
    if (record[1].length === 1) {
      const time = getTime(record[1][0], "23:59");
      const previousTime = timeRecord.get(record[0]);
      timeRecord.set(
        record[0],
        previousTime === undefined ? time : time + previousTime
      );
    }
  }

  // map -> array 동시에 차량 번호 작은 순으로 정렬
  const sortedFees = [...timeRecord].sort((a, b) => a[0] - b[0]);
  console.log(sortedFees);

  // 배열에서 시간만 쏙 빼서 calculator함수 거친 요금, answer 배열에 저장
  const answer = sortedFees.map((el) => calculator(fees, el[1]));
  return answer;
}
