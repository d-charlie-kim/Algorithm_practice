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

// let a = 5;
// let b = [2, 1, 2, 6, 2, 4, 3, 3];

// console.log(solution(a, b));
// expected answer = [3, 4, 2, 1, 5];


/*
	이차원 배열에 스테이지와 실패율을 저장
	실패율 순으로 정렬 후
	스테이지만을 배열로 만들어 출력.

	정렬을 두번하는 점과
	반복문을 두번 돈다는 점이 비효율적인 것 같다.

	리팩토링 필요.
*/