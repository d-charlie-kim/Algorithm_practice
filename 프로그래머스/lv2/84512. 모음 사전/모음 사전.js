function solution(n) {
	let count = 1;
	const compare = ['A'];
	const alpha = ['A', 'E', 'I', 'O', 'U'];

	// 같은 것은 반드시 나오니, 계속 반복한다.
	while (true) {
	    if (n === compare.join(''))  // 찾았다! 여기까지~ 해산!
			return count;

		if (compare.length < 5) {	// A다음은 AA, AE 다음도 AEA, 길이가 5미만이면 반드시 뒤에 A가 추가된다.
			compare.push('A');
		}
		else if (compare[compare.length - 1] === 'U') {
			while(compare[compare.length - 1] === 'U')  // 가장 오른쪽이 U면 U는 빼준다. // AAAAU -> AAAA || AAUUU -> AA
				compare.pop();
			
			compare.push(alpha[alpha.indexOf(compare.pop()) + 1]);  // 그 뒤에 끝을 바꿔준다. // AAAA -> AAAE || AA -> AE
		}
		else {
			compare.push(alpha[alpha.indexOf(compare.pop()) + 1]);  // 그 외의 경우는 끝만 바꿔준다. // AAAA -> AAAE || AA -> AE
		}
		count++;
	}
}

// 끝만 바꿔주는 방식은 pop() 한 것을 alpha 배열에서 index 찾고 그 다음 index의 값을 push() 해주는 것.