//mine

function change(numbers, s) {
	for (let i = 0; i < numbers.length; i++) {
			let regexAll = new RegExp(numbers[i], "g");
			s = s.replace(regexAll, i.toString());
	}
	return parseInt(s);
}

function solution(s) {
	let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

	let answer = change(numbers, s);
	return answer;
}

// replace & (정규표현식)regExp 객체 활용



//someone

function solution(s) {
	let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	var answer = s;

	for(let i=0; i< numbers.length; i++) {
			let arr = answer.split(numbers[i]);
			answer = arr.join(i);
	}

	return Number(answer);
}

// 기발한 방법
/*
문자를 기준으로 자르고, 
자른 공간에 숫자를 넣고 합친다.

이것을 반복 -> 숫자로 변환 후 return
*/