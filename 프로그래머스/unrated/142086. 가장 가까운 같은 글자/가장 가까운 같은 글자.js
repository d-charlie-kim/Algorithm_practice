// function solution(str) {
//   const history = {};
//   const answer = [];

//   str.split("").forEach((alpha, idx) => {
//     if (Object.keys(history).includes(alpha)) {
//       answer.push(idx - history[alpha]);
//       history[alpha] = idx;
//     } else {
//       answer.push(-1);
//       history[alpha] = idx;
//     }
//   });
//   return answer;
// }

function solution(str) {
    const answer = [];
    for (let i = 0; i < str.length; i++)
        answer.push(str.indexOf(str[i]) === i ? -1 : i - str.lastIndexOf(str[i], i - 1));
    return answer;
}