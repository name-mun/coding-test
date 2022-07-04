let input = require("fs").readFileSync("example.txt").toString().split(" ");

var a = parseInt(input[0]);
var result = 0;
var cycle = 0;
ori = a;

while (result != ori) {
  if (a < 10) {
    addN1 = 0;
    addN2 = a;
  } else {
    addN1 = parseInt(a / 10);
    addN2 = a % 10;
  }

  regResult = addN1 + addN2;
  result = addN2 * 10 + parseInt(regResult % 10);
  cycle++;

  a = result;
}

console.log(cycle);
