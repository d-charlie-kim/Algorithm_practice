function solution(sizes) {
    const weight = [];
    const height = [];

    for (const x of sizes) {
        weight.push(Math.max(x[0], x[1]));
        height.push(Math.min(x[0], x[1]));
    }

    weight.sort((a,b) => (b - a));
    height.sort((a,b) => (b - a));

    return (weight[0] * height[0]);
}