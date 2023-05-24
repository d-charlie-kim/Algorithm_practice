function solution(number, k) {
	const answer = [];

	for (let i = 0; i < number.length; i++) {
		if (answer.length !== 0 && k > 0 && answer[answer.length - 1] < number[i]) {
			answer.pop();
			k--;
			i--;
			continue;
		}
		answer.push(number[i]);
	}
	while (k > 0) {
		answer.pop();
		k--;
	}
	return answer.join('');
}