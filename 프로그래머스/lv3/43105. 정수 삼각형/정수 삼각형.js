function solution(triangle) {
  const counts = triangle.map((arr) => [...arr]);

  for (let i = 1; i < triangle.length; i++) {
    // 처음과 끝은 한 케이스 밖에 없기 때문에 바로 넣어준다
    counts[i][0] = counts[i - 1][0] + triangle[i][0];
    counts[i][triangle[i].length - 1] =
      counts[i - 1][triangle[i - 1].length - 1] +
      triangle[i][triangle[i].length - 1];

    for (let j = 1; j < triangle[i].length - 1; j++) {
      // 겹치는 부분은 max 비교를 통해 넣어준다
      counts[i][j] =
        Math.max(counts[i - 1][j - 1], counts[i - 1][j]) + triangle[i][j];
    }
  }

  const answer = Math.max(...counts[triangle.length - 1]); // 마지막 줄 숫자 중 가장 큰 수
  return answer;
}

// function solution(triangle) {
//   const len = triangle.length;
//   const totalLen = (len * (len + 1)) / 2;
//   const counts = new Array(totalLen).fill(0);
//   let max = 0;

//   function counting(prev, x, y) {
//     const index = ((x + 1) * x) / 2 + y;

//     if (counts[index] >= prev + triangle[x][y]) return;
//     else counts[index] = prev + triangle[x][y];

//     if (x === triangle.length - 1) {
//       max = Math.max(max, counts[index]);
//       return;
//     }

//     counting(counts[index], x + 1, y);
//     counting(counts[index], x + 1, y + 1);
//   }

//   counting(0, 0, 0);
//   return max;
// }