function solution(a, b) {
  const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const months = [30, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let count = 0;

  for (let i = a - 1; i >= 1; i--) count += months[i - 1];
  count += count === 0 ? b - 1 : b;

  return days[parseInt(count % 7)];
}
