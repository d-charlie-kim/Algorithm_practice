// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	const input = [];
	for await (const line of rl) {
		input.push(line);
	}
	rl.close();
	const N = parseInt(input[0]);
	input.shift();
	const city = input.map((e) => e.split(' '));
	// const visited = Array.from({length:N}, () => Array(N).fill(false));
	
	const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
	let count = 0;
	
	function bfs(row, col) {
		const queue = [[row, col]];
		city[row][col] = 0;
		
		while (queue.length > 0) {
			const [r, c] = queue.shift();

			for (const [dr, dc] of directions) {
				let newR = dr + r;
				let newC = dc + c;
				
				if (newR >= 0 && newR < N && newC >= 0 && newC < N && city[newR][newC] == '1') {
					queue.push([newR, newC]);
					city[newR][newC] = '0';
				}
			}
		}
	}
	
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (city[i][j] == '1') {
				bfs(i, j);
				count += 1;
			}
		}
	}
	console.log(count);
	process.exit();
})();