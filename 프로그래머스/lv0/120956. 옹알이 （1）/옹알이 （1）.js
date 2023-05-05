function checking(word)
{
    let count = 0;
    
    let index = word.indexOf("aya");
    if (index != -1)
        count += 3;
    
    index = word.indexOf("ye");
    if (index != -1)
        count += 2;
    
    index = word.indexOf("woo");
    if (index != -1)
        count += 3;
    
    index = word.indexOf("ma");
    if (index != -1)
        count += 2;

    if (count == word.length)
        return true;
    return false;
}

function solution(babbling)
{
    let answer = 0;
    
    for (let word of babbling)
    {
        if (checking(word))
            answer += 1;
    }
    return answer;
}