function solution(name, yearning, photo) {
    const answer = [];

    for (const phase of photo) {
        let count = 0;
        for (const nm of phase) {
            const index = name.indexOf(nm);
            count += index === -1 ? 0 : yearning[index];
        }
        answer.push(count);
    }
    return answer;
}