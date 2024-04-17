function gcd(a,b) {
    let r;

    while (b !== 0) {
        r = a % b;
        a = b;
        b = r;
    }
    return a;
}

function solution(arr) {
    arr.sort((a,b) => b - a);

    let a = arr[0], b, lcm;
    for (let i = 1; i < arr.length; i++) {
        b = arr[i];
        lcm = (a * b) / gcd(a,b);
        a = lcm;
    }
    return a;
}
    
// 2개의 자연수 a, b(a > b)에 대해서 a를 b로 나눈 나머지가 r일 때, a와 b의 최대공약수는 b와 r의 최대공약수와 같다.

// 두 수 a와 b의 최소공배수는 a와 b의 곱을 a와 b의 최대공약수로 나눈 것과 같다.