let input = require("fs").readFileSync("example.txt").toString().split("\n");

var min = parseInt(input[0]);
var max = parseInt(input[1]);

var decimal = [];
var count = 0;
var sum = 0;

const findDecimal = (min, max) => {
  for (i = min; i <= max; i++) {
    count = 0;
    for (j = i; j > 0; j--) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count == 2) {
      decimal.push(i);
    }
  }
  return decimal;
};

findDecimal(min, max);

for (i = 0; i < decimal.length; i++) {
  sum += decimal[i];
}

if (sum == 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(decimal[0]);
}
