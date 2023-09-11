function solution(s, n) {
    var answer = '';
    let sArr = s.split('');

    const upperArr = Array.from(
        { length: 26 }, (_, index) => String.fromCharCode(65 + index)
    );
    const lowerArr = Array.from({ length: 26 }, (_, index) => String.fromCharCode(97 + index));
    

    sArr.map((el) => {
        if (el === " ") {
            answer += " ";
          } else if (el === el.toUpperCase()) {
                upperArr.indexOf(el) + n > 25? (answer += upperArr[(upperArr.indexOf(el) + n) - upperArr.length]) : (answer += upperArr[upperArr.indexOf(el) + n])
          } else {
                lowerArr.indexOf(el) + n > 25? answer += lowerArr[lowerArr.indexOf(el) + n - lowerArr.length] : answer += lowerArr[lowerArr.indexOf(el) + n] 

          }
    })
    return answer;
}