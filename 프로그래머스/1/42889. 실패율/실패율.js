function solution(N, stages) {
	stages.sort((a, b) => (a - b));

	let stage = 1; count = 0, total = stages.length, i = 0;
	let fail = [], answer = [];

	while (stage <= N) {
		if (stage == stages[i]) {
			count += 1;
			i += 1;
			continue;
		}
		else {
			fail.push([stage, (count / total)]);
			total -= count;
			count = 0;
			stage += 1;
		}
	}

	fail.sort((a, b) => {
			if (a[1] == b[1]) {
				return (a[0] - b[0]);
			}
			return (b[1] - a[1]);
		});
	
	for (let x of fail)
			answer.push(x[0]);
	return answer;
}