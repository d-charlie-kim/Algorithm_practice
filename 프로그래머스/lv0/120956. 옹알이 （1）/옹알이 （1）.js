function checking(word)
{
    const cand = ['aya', 'ye', 'woo', 'ma'];
    let count = 0;
    
    for (const x of cand) {
        let index = word.indexOf(x);
        if (index != -1)
            count += x.length;
    }
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