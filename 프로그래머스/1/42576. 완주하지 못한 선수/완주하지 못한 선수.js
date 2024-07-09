// function solution(participant, completion) {
//   participant.sort();
//   completion.sort();

//   for (let i = 0; i < completion.length; i++) {
//     if (participant[i] != completion[i]) return participant[i];
//   }
//   return participant.pop();
// }

function solution(participant, completion) {
    const map = new Map();

    for (const name of participant) {
        if (!map.has(name))
            map.set(name, 1);
        else {
            map.set(name, map.get(name) + 1);
        }
    }

    for (const name of completion) {
        map.set(name, map.get(name) - 1);
    }

    for (const [key, value] of map.entries()) {
        if (value === 1) {
            return (key);
        }
    }
}