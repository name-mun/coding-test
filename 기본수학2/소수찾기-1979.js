let input = require("fs").readFileSync("example.txt").toString().split("\n");

var input1 = parseInt(input[0]);
let input2 = input[1].split(" ");

var decimal = 0;
var number = 0;
var count = 0;

const findDecimal = (input1, input2) => {
  while (input1 > 0) {
    count = 0;
    now = parseInt(input2[number]);

    for (i = 1; i < now; i++) {
      if (now % i == 0) {
        count++;
      }
    }

    if (count == 1) {
      decimal++;
    }
    number++;
    input1--;
  }
  return decimal;
};

console.log(findDecimal(input1, input2));
