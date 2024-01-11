function convertor(date) {
    date = date.split('.');
    return ((date[0] - 2000) * 336) + (((date[1] - 1) * 28) + parseInt(date[2]));
}

function solution(today, terms, privacies) {
    const convertedToday = convertor(today);
    const convertedTerms = {};
    
    terms.forEach((el) => {
        const [key, value] = el.split(' ');
        convertedTerms[key] = value;
    })

    const answer = [];
    for (let i = 0; i < privacies.length; i++) {
        const privacy = privacies[i].split(' ');
        const expireDay = convertor(privacy[0]) + (convertedTerms[privacy[1]] * 28);

        if (convertedToday >= expireDay)
            answer.push(i + 1);
    }
    return answer;
}