function solution(brown, yellow) {
    let width = 3;
    const answer = [];

    while (true) {
        let height = parseInt((brown + yellow) / width);
        
        if ((brown + yellow) % width === 0) {
            if ((width - 2) * (height - 2) === yellow) {
                answer.push(height);
                answer.push(width);
                return answer;
            }
        }
        width++;
    }
}