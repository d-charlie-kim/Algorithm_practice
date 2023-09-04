function solution(s) {
    if (s.length % 2 == 1)
        return (s[Math.trunc(s.length / 2)]);
    else
        return (s[Math.trunc(s.length / 2) - 1] + s[Math.trunc(s.length / 2)]);
}