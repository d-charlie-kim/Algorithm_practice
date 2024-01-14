function findStart(park) {
    for (let i = 0; i < park.length; i++) {
        const j = park[i].indexOf('S');
        if (j !== -1)
            return [i,j];
    }
}

//from 이 더 크면 <- from 이 작으면 -> 방향 체크
function checkObstacle(park, fromX, fromY, toX, toY) {
    for (let i = Math.min(fromX, toX); i <= Math.max(fromX, toX); i++) {
        if (park[i][fromY] === 'X')
            return false;
    }
    for (let j = Math.min(fromY, toY); j <= Math.max(fromY, toY); j++) {
        if (park[fromX][j] === 'X')
            return false;
    }
    return true;
}

function solution(park, routes) {
    const start = findStart(park),
          maxWidth = park[0].length - 1,
          maxHeight = park.length - 1;

    console.log(start);
    for (const route of routes) {
        let [dir, count] = route.split(' ');
        count = parseInt(count);

        if (dir === 'E' && start[1] + count <= maxWidth && checkObstacle(park,start[0],start[1],start[0],start[1] + count))
            start[1] += count;
        if (dir === 'W' && start[1] - count >= 0 && checkObstacle(park,start[0],start[1],start[0],start[1] - count))
            start[1] -= count;
        if (dir === 'N' && start[0] - count >= 0 && checkObstacle(park,start[0],start[1],start[0] - count,start[1]))
            start[0] -= count;
        if (dir === 'S' && start[0] + count <= maxHeight && checkObstacle(park,start[0],start[1],start[0] + count,start[1]))
            start[0] += count;
    }
    return start;
}