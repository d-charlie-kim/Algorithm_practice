function transition(n, k) {
  let kNumber = "";
  while (n >= k) {
    kNumber = (n % k) + kNumber;
    n = parseInt(n / k);
  }
  kNumber = n + kNumber;
  return kNumber;
}

function isPrime(num) {
  if (num === 1) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, k) {
  const arr = transition(n, k).split("0");

  let answer = 0;
  for (const el of arr) {
    if (el !== "" && isPrime(parseInt(el))) answer += 1;
  }
  return answer;
}