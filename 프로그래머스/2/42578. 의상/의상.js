function solution(clothes) {
    const map = new Map();
    clothes.forEach((comb) => {
       if (map.has(comb[1])) {
           map.set(comb[1], map.get(comb[1]) + 1);
       }
        else {
            map.set(comb[1], 1);
        }
    });
    
    const answer = [...map.values()].reduce((ac,va) => {
        return ac *= (va + 1)
    }, 1);
    return answer - 1;
}