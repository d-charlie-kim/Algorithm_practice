// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	const input = [];
	for await (const line of rl) {
		input.push(line);
		if (input.length === 2)
			rl.close();
	}
	
	const N = parseInt(input[0]);
	const mountains = input[1].split(' ').map(Number);
	const stack = [];
	let count = 0;
	
	for (const mountain of mountains) {
		if (stack.length === 0 || stack[0] > mountain) {
			stack.unshift(mountain);
			continue;
		}
		
		while (stack.length > 0 && stack[0] < mountain) {
			stack.shift();
		}
		
		if (stack.length > 0 && stack[0] === mountain) {
			stack.shift();
			count += 1;
		}
		stack.unshift(mountain);
	}
	console.log(count);
	

	process.exit();
})();
