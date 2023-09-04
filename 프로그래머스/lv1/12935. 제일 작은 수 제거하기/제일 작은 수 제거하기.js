function solution(arr) {
    var answer = [];
    let for_delete = 0;

    if (arr.length == 1)
        answer.push(-1);
    else {
        let check = arr[0];
        for (let i in arr) {
            if (Math.min(arr[i], check) == arr[i]) {
                check = arr[i];
                for_delete = i;
            }
        }
        arr.splice(for_delete, 1);
        answer = arr;
    }
    
    return answer;
}
