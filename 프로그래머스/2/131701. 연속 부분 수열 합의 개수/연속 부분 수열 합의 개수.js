function solution(elements) {
    const set = new Set();
    const sum = elements.reduce((ac,cu) => ac + cu);
    set.add(sum);

    for (let i = 0; i < elements.length; i++) {
        let progressSum = sum;
        for (let j = i; progressSum !== 0; j++) {
            if (j === elements.length)
                j = 0;
            progressSum -= elements[j];
            set.add(progressSum);
        }
    }
    return set.size - 1;
}
