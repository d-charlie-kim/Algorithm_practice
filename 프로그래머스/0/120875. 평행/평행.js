function solution(dots) {
    let map = new Map();
    let answer = 0;
    
    for(let i = 0; i < dots.length - 1; i++){
        for (let j = i + 1; j <= dots.length - 1; j++) {
            let x = dots[i][0] - dots[j][0];
            let y = dots[i][1] - dots[j][1];      
            if(map.has(y/x)) {
                if (map.get(y/x)) {
                    let a, b;
                    [a,b] = map.get(y/x);
                    if (a !== i && a !== j && b !== i && b !== j)
                        return 1;
                }
            } else {
                map.set(y/x,[i,j])
            }
          
        }
    }
    return answer
}