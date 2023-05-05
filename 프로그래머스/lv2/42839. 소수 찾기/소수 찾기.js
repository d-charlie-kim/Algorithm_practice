let answer = 0;
const storage = [];

function isPrime(num) { // 소수 판단
	if (storage.includes(num) || num < 2)
		return 0;

	for (let i = 2; i <= Math.sqrt(num); i++) {  // 제곱근까지 나눠지는 수 판단 (등호 안 넣고 < 하면 안됩니다.)
		if (num % i == 0)
			return 0;
	}
	storage.push(num);
	return 1;
}

function recursive(num, numbers, len) {
	if (len === 0) {
		if (num == '')
			return ;
		answer += isPrime(parseInt(num));
	}
	else {
		for (let i = 0; i < numbers.length; i++) {
			let newNumbers = numbers.slice();
			for (let j = 0; j < i; j++)
				newNumbers.push(newNumbers.shift());
			let newNum = num + newNumbers.shift();
			recursive(newNum, newNumbers, len - 1);
		}
	}
}

function solution(numbers) {
	const len = numbers.length;
    numbers = numbers.split('');

	for (let i = 1; i <= len; i++)
		numbers.push('');

	recursive('', numbers, len);
	return answer;
}