function solution(sizes) {
    const width = [];
    const height = [];

    for (const x of sizes) {
        width.push(Math.max(x[0], x[1]));
        height.push(Math.min(x[0], x[1]));
    }

    return (Math.max(...width) * Math.max(...height));
}