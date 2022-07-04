let input = require("fs").readFileSync("example.txt").toString().split(" ");
var a = parseInt(input[0]);

for (i = 1; i < 10; i++) {
  console.log(a, "*", i, "=", a * i);
}
