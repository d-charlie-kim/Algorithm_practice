function recursive(numbers, index, current, target) {
    if (index === numbers.length) {
        if (current === target)
            return 1;
        else
            return 0;
    }
    return (recursive(numbers, index + 1, current + numbers[index], target) + recursive(numbers, index + 1, current - numbers[index], target));
}

function solution(numbers, target) {
    const answer = recursive(numbers, 0, 0, target);
    return answer;
}