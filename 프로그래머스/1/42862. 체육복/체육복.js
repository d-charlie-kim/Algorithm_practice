function solution(n, lost, reserve) {
    const students = new Array(n).fill(1); // 전체 학생 나열

    for (const num of lost) // 잃어버린 학생들 차감
        students[num - 1] -= 1;
    for (const num of reserve) // 여분 있는 학생들 가감
        students[num - 1] += 1;

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (students[i] >= 1) // 본인 체크
            count += 1;
        else if (i > 0 && students[i - 1] > 1) // 앞번호 체크
            count += 1;
        else if (i < n - 1 && students[i + 1] > 1) { // 뒷번호 체크
            students[i + 1] -= 1; // 뒷번호는 하나 차감
            count += 1;
        }
    }
    return count;
}