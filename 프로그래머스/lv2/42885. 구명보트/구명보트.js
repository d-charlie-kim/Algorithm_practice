/*
function solution(people, limit) {
	people.sort((a,b) => (b - a));
	
	let count = 0, sum = 0;
	let start = 0, end = people.length - 1;

	while(start < end) {
		if (sum + people[start] <= limit) {
			sum += people[start];
			start += 1;
		}
		else {
			while (start < end && sum + people[end] <= limit) {
				sum += people[end];
				end -= 1;
			}
			count += 1;
			sum = 0;
		}
	}
	if (sum + people[start] > limit)
			count += 1;
	return count + 1;
}
*/

// 한번에 최대 2명씩 밖에 탈 수 없다는 부분을 간과했다.

function solution(people, limit) {
	people.sort((a,b) => (b - a));
	
	let count = 0, sum = 0;
	let start = 0, end = people.length - 1;

	while(start <= end) {
        if (start == end) {
            count += 1;
            break;
        }
        if (people[start] + people[end] <= limit)
            end -= 1;
        count += 1;
        start += 1;
    }
	return count;
}