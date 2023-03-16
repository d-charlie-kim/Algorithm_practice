function solution(A,B){
	A.sort((a,b) => (b - a));
	B.sort((a,b) => (a - b));

	let answer = 0;
	for (let i = 0; i < A.length; i++) {
		answer += (A[i] * B[i]);		
	}
	return answer;
}
