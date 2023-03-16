function solution(s) {
	let array = s.split(' ');
	let answer = [];

	array.forEach((str) => {
		answer.push(str.charAt(0).toUpperCase() + str.toLowerCase().slice(1));
	})

	return answer.join(' ');
}
