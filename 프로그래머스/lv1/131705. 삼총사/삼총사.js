function solution(number) {
  let count = 0;

  for (let x = 0; x < number.length; x++) {
    for (let y = x + 1; y < number.length; y++) {
      for (let z = y + 1; z < number.length; z++) {
        if (number[x] + number[y] + number[z] === 0) count += 1;
      }
    }
  }
  return count;
}