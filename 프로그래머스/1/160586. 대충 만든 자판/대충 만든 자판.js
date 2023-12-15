function solution(keymap, targets) {
	const counts = [];

	for (const target of targets) {
		let countSum = 0;
		for (let i = 0; i < target.length; i++) {
			let minCount = Number.MAX_SAFE_INTEGER;

			for (const key of keymap) {
				const count = key.indexOf(target[i])
				if (count !== -1)
					minCount = Math.min(minCount, count + 1);
			}

			if (minCount === Number.MAX_SAFE_INTEGER) {
				countSum = -1;
				break;
			}
			countSum += minCount;
		}
		counts.push(countSum);
	}
	return counts;
}