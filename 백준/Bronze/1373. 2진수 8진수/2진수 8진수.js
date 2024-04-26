let fs = require("fs");
let input = fs.readFileSync(0).toString();
console.log(BigInt('0b' + input).toString(8));