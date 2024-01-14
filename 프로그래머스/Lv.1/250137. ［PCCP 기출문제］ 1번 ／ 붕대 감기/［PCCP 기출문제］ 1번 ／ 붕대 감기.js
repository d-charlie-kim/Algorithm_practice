function solution(bandage, health, attacks) {
    let attackIdx = 0, bandageCount = 1, maxHP = health;
    for (let time = 1; attacks[attacks.length - 1][0] >= time; time++) {
        if (attacks[attackIdx][0] === time) {
            health -= attacks[attackIdx][1];
            attackIdx += 1;
            bandageCount = 0;
            if (health <= 0) {
                return -1;
            }
            continue;
        }
        else {
            bandageCount += 1;
            health += bandage[1];
            if (bandageCount === bandage[0]) {
                bandageCount = 0;
                health += bandage[2]
            }
        }
        health = Math.min(health, maxHP);
    }
    return health;
}