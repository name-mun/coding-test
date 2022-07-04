let input = require("fs").readFileSync("example.txt").toString().split(" ");
var a = parseInt(input[0]);

let answer = "";

let b = 1;
while (a > 0) {
  answer += b + "\n";
  b++;
  a--;
}

console.log(answer);
