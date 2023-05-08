function solution(cacheSize, cities) {
	let answer = 0;
	let cache = [];
	for (let x of cities) {
        let index = cache.indexOf(x.toUpperCase());
        if (index != -1) {
            answer += 1;
            cache.splice(index, 1);
        }
        else {
            answer += 5;
        }
        cache.push(x.toUpperCase());
        if (cache.length > cacheSize)
            cache.shift();
	}
	return answer;
}