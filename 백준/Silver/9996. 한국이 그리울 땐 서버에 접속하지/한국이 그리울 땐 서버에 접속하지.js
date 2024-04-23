let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = parseInt(input[0]);
let [front, back] = input[1].split("*");
for (let i = 2; i < N + 2; i++) {
  let fileName = input[i];
  if (
    fileName.startsWith(front) &&
    fileName.endsWith(back) &&
    fileName.length >= front.length + back.length
  ) {
    console.log("DA");
  } else {
    console.log("NE");
  }
}
