function solution(num, total) {
    let answer = new Array(num).fill(0).map((el, i) => i + 1);  // 기준 배열 만들기 [1,2,...,num]
    let sum = answer.reduce((a, c) => a + c);  // 기준 배열의 총 합

    let step = (total - sum) / num;  // 몇칸 움직일까요
    answer = answer.map((el) => (el + step));  // 움직여주세요
    return answer;
}

/*

total을 num으로 나눈 수(몫)는 항상 배열의 중앙에 위치한다는 점을 기준으로
접근하려고 했으나 실패.
-> (4, 14) 의 경우 3을 기준으로 어느 쪽으로 더 길어져야 하는지 찾는 것에 대한 번거로움


그러던 중 규칙을 발견
[1,2,3,4,5] 한 연속된 수의 배열이 존재할때
배열을 한칸 오른쪽으로 옮기면 === (모든 배열 요소에 '+1'하면)
배열의 총 합은 배열의 길이만큼 커진다.

[1,2,3,4,5] -> [2,3,4,5,6]
-> 전체적으로 한칸 움직였는데, 총 합은 +5(arr.length) 증가

--> 다시 정리하면 기준 배열에서 전체적으로 i칸 움직이면
--> 배열의 총 합은 (arr.length * i) 만큼 증가한다.

---> 기준 배열을 ((배열 총 합 - total) / arr.length) 만큼 움직이면 된다.
*/