function solution(N, stages) {
	stages.sort((a, b) => (a - b));
		 
	let stage = 1; count = 0, total = N;
	let fail = [], answer = [];

	for (let x of stages) {
			if (stage == x)
					count += 1;
			else {
					fail.push([stage, count / total]);
					total -= count;
					count = 0;
					stage += 1;
			}
	}
	fail.push([stage, count / total]);
	fail.sort((a, b) => {
			if (a[1] == b[1])
					return (b[0] - a[0]);
			return (a[1] - b[1]);
	});
	
	for (let x of fail)
			answer.push(x[0]);
	return answer;
}