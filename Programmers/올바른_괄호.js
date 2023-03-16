function solution(s){
	let stack = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(')
			stack++;

		if (s[i] === ')') {
			if (stack === 0)
				return false;
			stack--;
		}
	}

	if (stack !== 0)
		return false;
	return true;
}
