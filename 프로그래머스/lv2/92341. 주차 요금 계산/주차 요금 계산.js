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
  const storage = new Map();
  const timeRecord = new Map();

  for (const record of records) {
    const parse = record.split(" ");
    if (parse[2] === "IN") {
      storage.set(parse[1], [parse[0]]);
    } else {
      const time = getTime(storage.get(parse[1])[0], parse[0]);
      const previousTime = timeRecord.get(parse[1]);
      timeRecord.set(
        parse[1],
        previousTime === undefined ? time : time + previousTime
      );
      storage.delete(parse[1]);
    }
  }

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

  const sortedFees = [...timeRecord].sort((a, b) => a[0] - b[0]);
  console.log(sortedFees);

  const answer = sortedFees.map((el) => calculator(fees, el[1]));
  return answer;
}