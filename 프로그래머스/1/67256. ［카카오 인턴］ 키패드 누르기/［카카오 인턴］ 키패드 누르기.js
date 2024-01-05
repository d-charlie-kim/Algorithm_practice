function solution(numbers, hand) {
  let answer = "";
  let left_hand = 10,
    right_hand = 12,
    left_count = 0,
    right_count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) numbers[i] = 11;
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      left_hand = numbers[i];
      answer += "L";
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      right_hand = numbers[i];
      answer += "R";
    } else {
      left_count = parseInt(Math.abs(left_hand - numbers[i]) / 3) + (Math.abs(left_hand - numbers[i]) % 3);
      right_count = parseInt(Math.abs(right_hand - numbers[i]) / 3) + (Math.abs(right_hand - numbers[i]) % 3);

      if (left_count > right_count || (left_count === right_count && hand == "right")) {
        right_hand = numbers[i];
        answer += "R";
      } else {
        left_hand = numbers[i];
        answer += "L";
      }
    }
  }
  return answer;
}