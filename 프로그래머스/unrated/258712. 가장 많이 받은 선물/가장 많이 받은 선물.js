function checkGifts(database, nameA, nameB) {
    function counting(from, to) {
        const log = database[from][2];
        return log.filter((name) => name === to).length;
    }

    const [fromAtoB, fromBtoA] = [counting(nameA, nameB), counting(nameB, nameA)];
    const [countA, countB] = [database[nameA][0] - database[nameA][1], database[nameB][0] - database[nameB][1]];

    if (fromAtoB > fromBtoA || (fromAtoB === fromBtoA && countA > countB))
        database[nameA][3] += 1;
    if (fromAtoB < fromBtoA || (fromAtoB === fromBtoA && countB > countA))
        database[nameB][3] += 1;
}

function solution(friends, gifts) {
    const database = {};
    friends.forEach((name) => {
        // [준거, 받은거, 누구에게 줬는가 로그, 추가로 받는 선물]
        database[name] = [0, 0, new Array(), 0];
    })
    
    for (const gift of gifts) {
        const [from, to] = gift.split(' ');

        database[from][0] += 1;
        database[to][1] += 1;
        database[from][2].push(to);
    }

    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            checkGifts(database, friends[i], friends[j]);
        }
    }

    const resultArr = Object.values(database);
    const count = resultArr.sort((a,b) => b[3] - a[3])[0][3];
    return count;
}