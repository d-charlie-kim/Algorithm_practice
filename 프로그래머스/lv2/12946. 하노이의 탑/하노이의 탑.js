function recursive(from, to, temp, n, answer) {
	if (n > 1)
		recursive(from, temp, to, n - 1, answer);
	answer.push([from, to]);
	if (n > 1)
		recursive(temp, to, from, n - 1, answer);
}

function solution(n) {
	let answer = [];
	recursive(1, 3, 2, n, answer);
	return answer;
}