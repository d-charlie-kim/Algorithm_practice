function recursive(routes, ticketMap, current) {
    while (ticketMap.has(current) && ticketMap.get(current).length > 0) {
        const next = ticketMap.get(current).pop();
        recursive(routes, ticketMap, next);
    }
    routes.push(current);
}

function solution(tickets) {
    const ticketMap = new Map();

    for (let [from, to] of tickets) {
        if (!ticketMap.has(from)) {
            ticketMap.set(from, []);
        }
        ticketMap.set(from, [...ticketMap.get(from), to].sort((a, b) => b.localeCompare(a)));
    }

    const routes = [];
    recursive(routes, ticketMap, "ICN");

    return routes.reverse();  // 경로가 역순으로 만들어지기 때문에 최종적으로 뒤집어야 합니다.
}