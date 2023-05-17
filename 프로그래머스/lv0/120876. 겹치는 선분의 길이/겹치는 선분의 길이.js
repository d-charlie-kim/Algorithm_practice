function countLines(lines) {
	let answer = 0;

	for (let point = lines[0][0] + 1; point <= lines[lines.length - 1][1]; point++) {
		let count = 0;
		for (let x = 0; x < lines.length; x++) {
			if (lines[x][0] < point && point <= lines[x][1])
				count += 1;
			if (count >= 2) {
				answer += 1;
				break;
			}
		}
	}
	return answer;
}

function solution(lines) {
	lines.sort((a, b) => {
		if (a[0] == b[0])
			return (a[1] - b[1]);
		return (a[0] - b[0]);
	})
	let answer =  countLines(lines);
	return answer;
}