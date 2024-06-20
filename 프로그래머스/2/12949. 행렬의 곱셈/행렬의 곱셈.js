function solution(arr1, arr2) {
    var answer = [];
    
    for (let i = 0; i < arr1.length; i++) {
        var newRow = new Array();
        for (let j = 0; j < arr2[0].length; j++) {
            let num = 0;
            for (let x = 0; x < arr1[0].length; x++) {
                num += arr1[i][x] * arr2[x][j];
            }
            newRow.push(num);
        }
        answer.push(newRow);
    }
    return answer;
}