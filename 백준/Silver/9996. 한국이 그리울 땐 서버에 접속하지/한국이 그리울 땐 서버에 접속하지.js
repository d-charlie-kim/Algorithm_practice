let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = parseInt(input[0]); // 파일의 개수
let pattern = input[1].split("*");
let front = pattern[0], back = pattern[1];

for (let i = 2; i < 2 + N; i++) { // 파일 이름을 순회
  let fileName = input[i];
  if (fileName.startsWith(front) && fileName.endsWith(back) && fileName.length >= front.length + back.length) {
    console.log("DA");
  } else {
    console.log("NE");
  }
}
