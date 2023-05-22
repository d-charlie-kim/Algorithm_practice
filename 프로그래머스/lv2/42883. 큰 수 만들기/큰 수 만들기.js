// function solution(number, k) {
//     number = number.split('');
    
//     while (true) {
//         let temp = k;
//         let idx = 0;
// 		while (idx !== number.length && number[idx] === number[idx + 1])
//             idx++;

//         for (let i = idx; i < number.length - 1; i++) {
//             if (number[i] < number[i + 1]) {
//                 number.splice(i, 1);
//                 k--;
//                 break ;
//             }
//         }
//         if (k === 0 || temp === k)
//             break ;
//     }
//     for (; k > 0; k--)
//         number.pop();
//     return number.join('');
// }
function solution(number, k) {
  var answer = "";
  const arr = [];

  for (let i = 0; i < number.length; i++) {
    while (k > 0 && arr.length > 0 && arr[arr.length - 1] < number[i]) {
      //k개의 수를 제거할 동안
      arr.pop();
      k--;
    }
    arr.push(number[i]);
  }
  arr.splice(number.length - k, k);
  answer = arr.join("");
  return answer;
}

/*
매 순간 어느 숫자를 뺴는 것이 제일 큰 수가 되는지 판단해야 한다.

1. 같은 자릿수의 수는 앞자리가 큰 수가 크다.
2. (현재 자릿수 < 다음 자릿수) 라면 현재 자릿수를 지우는 것이 크다.
2-1. 기준은 앞(높은 자릿수)부터 탐색한다.
3. '111' 처럼 앞 자릿수와 뒷 자릿수가 같은 경우를 따로 처리해줘야 한다. (아니면 무한 loop) 
*/