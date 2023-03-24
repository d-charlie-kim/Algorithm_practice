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

// TEST CASE
let a = [[0, 1], [2, 5], [3, 9]]; //answer: 2;
let b = [[-1, 1], [1, 3], [3, 9]]; // answer: 0;
let c = [[0, 5], [3, 9], [1, 10]]; // answer: 8;
console.log(solution(a));
console.log(solution(b));
console.log(solution(c));


/*
//REVIEW
 현재 문제는 Lines의 길이가 3으로 고정되어 있는데,
 만약 lines의 길이가 자유롭다면 (선분의 개수가 여러개라면)
 이 방식으로 가능한가?

 n제곱인데,
 더 효율적인 방법은 없는가?
 */