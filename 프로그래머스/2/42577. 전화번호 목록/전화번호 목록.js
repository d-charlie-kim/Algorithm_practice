// 완전탐색
// 시간복잡도 O(n^2 * m)
// n은 전화번호의 개수, m은 가장 긴 전화번호의 길이
// function solution(phone_book) {
//     for (let i = 0; i < phone_book.length - 1; i++) {
//         for (let j = 0; j < phone_book.length; j++) {
//             if (i !== j && phone_book[j].indexOf(phone_book[i]) === 0)
//                 return false;
//         }
//     }
//     return true;
// }

// 해시
// 시간복잡도 O(nm)
function solution(phone_book) {
    const set = new Set(phone_book);
    for (let phone of phone_book) {
        for (let i = 1; i < phone.length; i++) {
            if (set.has(phone.slice(0, i))) {
                return false;
            }
        }
    }
    return true;
}


// AI발 다른 코드
// 정렬 활용
// 시간복잡도 O(nlogn + nm)
// String.prototype.startsWith() 메서드 확인
// function solution(phone_book) {
//     phone_book.sort();
//     for (let i = 0; i < phone_book.length - 1; i++) {
//         if (phone_book[i+1].startsWith(phone_book[i])) {
//             return false;
//         }
//     }
//     return true;
// }
