let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  const sortInput = input[i].split("").sort().join("").trim();
  const splitInput = sortInput.match(/(\w)\1*/g);

  splitInput.sort((a, b) => b.length - a.length);

  if (splitInput.length === 1 || splitInput[0].length > splitInput[1].length) {
    console.log(splitInput[0][0]);
  } else {
    console.log("?");
  }
}
