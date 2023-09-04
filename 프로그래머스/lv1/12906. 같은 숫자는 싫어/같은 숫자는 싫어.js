function solution(arr)
{
    const answer = [];

    for (let i = 0; i < arr.length;) {
        answer.push(arr[i]);
        while (answer[answer.length - 1] === arr[i])
            i++;
    }
    return answer;
}