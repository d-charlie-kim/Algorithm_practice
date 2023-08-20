function solution(id_list, report, k) {
    let idData = new Map();
    let reportData = new Map();
    
    for (const id of id_list) {
        idData.set(id, []);
        reportData.set(id, []);
    }

    for (const rpt of report) {
        const from = rpt.split(' ')[0];
        const to = rpt.split(' ')[1];
        const oldData = idData.get(from);
        if (oldData.indexOf(to) === -1) {
            idData.set(idData.get(from).push(to));
            reportData.set(reportData.get(to).push(from));
        }
    }
    
    const answer = [];
    for (const id of id_list) {
        const toWrap = idData.get(id);
        let count = 0;

        for (const to of toWrap) {
            if (reportData.get(to).length >= k)
                count += 1;
        }
        answer.push(count);
    }
    
    return answer;
}