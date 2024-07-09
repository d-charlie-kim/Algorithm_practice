// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	
	let num = 0;
	for await (const line of rl) {
		num = parseInt(line);
		rl.close();
	}
	for (let i = 1; i <= num; i++) {
		console.log('*'.repeat(i));
	}
	process.exit();
})();
