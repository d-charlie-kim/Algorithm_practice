let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const MAX = 15;

let answer = "";
for (let i = 0; i < MAX; i++) {
  for (const str of input) {
    if (i < str.length) {
			answer += str[i];
		}
  }
}
console.log(answer);