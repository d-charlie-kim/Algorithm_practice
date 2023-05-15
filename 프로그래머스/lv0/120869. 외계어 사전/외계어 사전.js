function solution(spell, dic) {
    let answer = 0;
    for (const x of dic) {
        let flag = true;
        for (const el of spell) {
            if (x.indexOf(el) === -1)
                flag = false;        
        }
        if (flag)
            return 1;
    }
    return 2;
}