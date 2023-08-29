function deleteBrace(s) {
  const start = s[0] === "{" ? 1 : 0;
  const end = s[s.length - 1] === "}" ? s.length - 1 : s.length;

  return s.slice(start, end);
}

function solution(s) {
  const answer = [];
  const lst = deleteBrace(s)
    .split("},{")
    .map((el) => {
      const arr = deleteBrace(el).split(",");
      return arr.map((x) => parseInt(x));
    })
    .sort((a, b) => {
      return a.length - b.length;
    });

  for (const ls of lst) {
    for (const el of ls) {
      if (answer.indexOf(el) === -1) answer.push(parseInt(el));
    }
  }
  return answer;
}