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

/*
!! 문제 정확히 이해하기.

LRU 알고리즘 : 가장 오랫동안 참조되지 않은 페이지를 교체하는 기법

* 캐시를 사용했다면 해당 캐시는 지워준다.
* 캐시 공간이 비어있다면, 이미 캐시에 있는 정보라도 넣어준다.
*/