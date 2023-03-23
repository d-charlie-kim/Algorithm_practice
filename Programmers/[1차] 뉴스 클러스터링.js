function divide_pair(str) {
    let alpha = /[a-zA-Z]/;
    let ret = [];
    for (let i = 0; i < str.length - 1; i++) {
        if (alpha.test(str[i]) && alpha.test(str[i + 1]))
        ret.push((str[i] + str[i + 1]).toUpperCase());
    }
    return ret;
}

function compare(A, B) {
    let total = A.length + B.length;
    let common = 0;
    let index = 0;

    if (!A.length && B.length)
        return 65536;

    for (let x of B) {
        index = A.indexOf(x);
        if (index != -1) {
            common += 1;
            total -= 1;
            A.splice(index, 1);
        }
    }
    return Math.trunc((common / total) * 65536);
}

function solution(str1, str2) {
    let A = divide_pair(str1);
    let B = divide_pair(str2);
    let answer = compare(A, B);
    return answer;
}


// TEST CASE
// let a = "FRANCE";
// let b = "french";

// let a = "aa1+aa2";
// let b = "AAAA12";

// console.log(solution(a, b));

