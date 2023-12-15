function solution(board, moves) {
  const basket = [];
  let count = 0;
  // moves의 길이만큼 작동하는 for문
  for (let x of moves) {
    for (let i = 0; i < board.length; i++) {
      // 0이 아닌 값을 빼내어 바구니에 넣기
      if (board[i][x - 1] === 0) {
        continue;
      } else {
        basket.push(board[i][x - 1]);
        board[i][x - 1] = 0;
        break;
      }
    }

    // 바구니의 길이가 2 이상 && 위에 쌓인 두 인형의 값이 같으면 => 두 인형 모두 제거
    if (basket.length >= 2 && basket[basket.length - 1] === basket[basket.length - 2]) {
      basket.pop();
      basket.pop();
      // 제거한 인형 개수 더하기
      count += 2;
    }
  }
  return count;
}