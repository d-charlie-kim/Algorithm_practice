function calculator(n, numA, numB)
{
    line = "";
    let temp = 0, flag = 0;
    for (let i = n - 1; i >= 0; i--) {
        temp = Math.pow(2, i);
        if (numA >= temp) {
            numA -= temp;
            flag += 1;
        }
        if (numB >= temp) {
            numB -= temp;
            flag += 1;
        }
        if (flag == 0)
            line += " ";
        else
            line += "#";
        flag = 0;
    }
    return line;
}

function solution(n, arr1, arr2) {
    let answer = [];
    
    for (let i = 0; i < n; i++) {
        answer.push(calculator(n, arr1[i], arr2[i]));
    }
    return answer;
}