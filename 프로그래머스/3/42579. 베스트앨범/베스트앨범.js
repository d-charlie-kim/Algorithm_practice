function solution(genres, plays) {
    const genreMap = new Map();

    for (let i = 0; i < genres.length; i++) {
        genreMap.set(genres[i], [...(genreMap.get(genres[i]) || []), i] )
    }    

    const sortedGenres = [...genreMap.entries()].sort((a,b) => {
        const aSum = a[1].reduce((ac, cu) => ac + plays[cu], 0);
        const bSum = b[1].reduce((ac, cu) => ac + plays[cu], 0);
        return bSum - aSum;
    });

    const answer = [];
    for (const genre of sortedGenres) {
        genre[1].sort((a,b) => plays[b] - plays[a]);
        console.log(genre[1]);
        if (genre[1].length == 1) {
            answer.push(genre[1][0]);
        } else {
            answer.push(genre[1][0], genre[1][1]);
        }
    }
    return answer;
}