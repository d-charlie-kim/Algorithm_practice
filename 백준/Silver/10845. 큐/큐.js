const fs = require('fs');
const commands = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
commands.shift();
let queue = [];
let answer = '';
let startIdx = 0;
commands.forEach(command => {
  const len = queue.length - startIdx;

  if (command === 'pop') {
    if (len !== 0) {
      answer += queue[startIdx] + '\n';
      startIdx++;
    } else {
      answer += -1 + '\n';
    }
  } else if (command === 'size') answer += len + '\n';
  else if (command === 'empty') answer += len === 0 ? 1 + '\n' : 0 + '\n';
  else if (command === 'front') answer += len === 0 ? -1 + '\n' : queue[startIdx] + '\n';
  else if (command === 'back') answer += len === 0 ? -1 + '\n' : queue[queue.length - 1] + '\n';
  else queue.push(parseInt(command.split(' ')[1]));
});
console.log(answer);
